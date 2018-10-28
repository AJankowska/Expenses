import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { MainService } from '../services/main.service';
import { Income } from '../interfaces/income';
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  msg:string;
  incomeValue:number=this._service.totalIncomeValue;

  toggleEditI:boolean=false;
  validatingForm: FormGroup;
  incomes:Array<Income> = this._service.incomes;
 
  saveAmount:number;

  constructor(private fb: FormBuilder, private _service:MainService) {
  this.validatingForm = fb.group({
      'incomeName': [null, Validators.required],
      'incomeAmount':[null, Validators.required],
  });
  }
  ngOnInit() {
    
  }
  sendIncome(a:string,b:number,c=this._service.incomes.length){
    
    this._service.sendIncome(a,Number(b),c);
    this.incomeValue = this._service.totalIncomeValue;
    
    this.validatingForm.reset(); 
  
  }
  deleteIncome(a:number){
    this._service.deleteIncome(a);   
    this.incomeValue = this._service.totalIncomeValue;
  }
  addToSavings(){
    if(this.saveAmount<=this.incomeValue)
    {
    this._service.addPaymentToSavings(this.saveAmount);
    this.incomeValue = this._service.totalIncomeValue;
    }
    else
    {
      this.msg = "Nie masz wystarczających środków!";
      alert(this.msg);
    }
  }

}
