import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Saving } from '../interfaces/saving';
import { Income } from '../interfaces/income';
import { FixedExpenses } from '../interfaces/fixedexpenses';
import { ChangeableExpenses } from '../interfaces/changeexpenses';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private _service : MainService) { }
  
  savings:Array<Saving>=this._service.savings;
  incomes:Array<Income>=this._service.incomes;
  expensesFixed:Array<FixedExpenses>=this._service.expensesFixed;
  expensesChange:Array<ChangeableExpenses>=this._service.expensesChangeable;
  ngOnInit() {
    
  }

}
