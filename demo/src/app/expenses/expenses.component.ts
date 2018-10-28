import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MainService } from '../services/main.service';
import { ChangeableExpenses } from '../interfaces/changeexpenses';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  categories:Array<string> = this._service.categories;
  toggleEdit:boolean=false;
  toggleEditCh:boolean=false;
  validatingForm: FormGroup;
  validatingFormFixed:FormGroup;
  wasNecessary:boolean=false;
  changeIndex:number;
  
  expensesChangeable:Array<ChangeableExpenses> = this._service.expensesChangeable;
  totalChangeExpenses: number;
  totalExpenses: number;
  constructor(private fb: FormBuilder, private _service:MainService) {
  this.validatingForm = fb.group({
      'expenseName': [null, Validators.required],
      'expenseAmount':[null, Validators.required],
  });
  this.validatingFormFixed = fb.group({
    'expenseFixedName': [null, Validators.required],
    'expenseFixedAmount':[null, Validators.required],
});
  }
  ngOnInit() {
   
  }
  
  addExpense(a:string,b:string,c:string){
   
    this._service.addChangeableExpense(a,c,Number(b),this.wasNecessary);
    this.expensesChangeable = this._service.expensesChangeable;
    if(this._service.msg !== undefined){alert(this._service.msg);}
    this.totalChangeExpenses = this._service.totalChangeExpenses;
    this.totalExpenses = this._service.totalExpense;
  }
  sendChangeIndex(a:number)
  {
   this.changeIndex = a; 
  }
  deleteExpense(){
    this._service.deleteChangeableExpense(this.changeIndex);
    this.totalChangeExpenses = this._service.totalChangeExpenses;
    this.totalExpenses = this._service.totalExpense;
  }
  addFixedExpense(a:string,b:number,c:Date){
    this._service.addFixedExpense(a,b,c);
  }
  deleteFixedExpense(a:number){
    this._service.deleteFixedExpense(a);
  }

}
