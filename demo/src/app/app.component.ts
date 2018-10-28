import { Component } from '@angular/core';

import { MainService } from './services/main.service';
import { Saving } from './interfaces/saving';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private _service:MainService){
}
totalExpenses:number=this._service.totalFixedExpenses+this._service.totalChangeExpenses;
totalIncome:number=this._service.totalIncomeValue;
totalSavings:number=this._service.goalsavings+this._service.nongoalsavings;
allSavings:Array<Saving>=this._service.savings;
latestSaving=()=>{
  if(this.allSavings.length!==0){
let i = this.allSavings.length -1;
return this.allSavings[i].name;}
else return "brak"
}
oldestSaving=()=>{
  if(this.allSavings.length!==0){
  return this.allSavings[0].name;
  }else return "brak";
}
closeToEndSaving =()=>{
  if(this.allSavings.length!==0){
  let biggest:Saving,lastnumber:number=0;
  for(let saving of this.allSavings){
    if((saving.achieved/saving.fullamount)> lastnumber) biggest=saving;
  }
  return biggest.name;}
  else{return "brak"};
}
cTES=this.closeToEndSaving()
oS=this.oldestSaving()
lS=this.latestSaving()

}
