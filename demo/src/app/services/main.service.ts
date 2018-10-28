import { Injectable } from '@angular/core';
import { FixedExpenses } from '../interfaces/fixedexpenses';
import { ChangeableExpenses } from '../interfaces/changeexpenses';
import { Saving } from '../interfaces/saving';
import { Income } from '../interfaces/income';
import { Payment } from '../interfaces/payment';

@Injectable({
  providedIn: 'root'
})

export class MainService 
{
  
    addedToSavings:Array<Payment> = new Array<Payment>();
    categories:Array<string>= ['food', 'gadgets', 'goingout'];
    expensesFixed:Array<FixedExpenses> = new Array<FixedExpenses>();
    expensesChangeable:Array<ChangeableExpenses> = new Array<ChangeableExpenses>();
    savings:Array<Saving>= new Array<Saving>();
    incomes:Array<Income>= new Array<Income>();
    savingsAchieved:Array<Saving> = new Array<Saving>();
    amountToSave:number = this.totalSavings();
    totalIncomeValue:number = this.totalIncome() - this.amountToSave -this.totalExpenses();
    
    goalsavings: number = this.calcGoalSavings();
    nongoalsavings: number=this.calcNonGoalSavings();
    totalExpense:number = this.totalExpenses();
    totalAccomplishedSavings: number;
    totalFixedExpenses: any;
    totalChangeExpenses: number;
    msg: string;

    constructor() 
    { 
     
    }
    calcChangeExpenses()
    {
      this.totalChangeExpenses=0;
      for(let i =0; i< this.expensesChangeable.length; i++)
      {
        this.totalChangeExpenses += this.expensesChangeable[i].amount;
      }
      return this.totalChangeExpenses;
    }
    calcFixedExpenses()
    {
      this.totalFixedExpenses=0;
      for(let i = 0; i<this.expensesFixed.length; i++)
      {
        this.totalFixedExpenses += this.expensesFixed[i].amount
      }
      return this.totalFixedExpenses;
    }
    totalExpenses()
    {
       return this.calcChangeExpenses() + this.calcFixedExpenses()
    }
    totalIncome()
    {
      let totalIncomeValue=0;
      for(let i =0; i<this.incomes.length;i++)
      {
        totalIncomeValue += + this.incomes[i].amount
      }
      return  totalIncomeValue - this.calAccomplishedSavings();
    }
  
    sendIncome(a:string,b:number,c:number)
    {
      this.incomes.push({id:c,name:a, amount:b,date:new Date(),income:"a"});
      this.totalIncomeValue = this.totalIncome();
    }
    deleteIncome(a:number)
    {
      this.incomes.splice(a-1,1);
      this.totalIncomeValue = this.totalIncome() -this.totalSavings() -this.totalExpenses();
    }
    addPaymentToSavings(a:number)
    {
      this.addedToSavings.push({amount:a,date: new Date()});
      this.totalIncomeValue = this.totalIncome() - this.totalSavings() -this.totalExpenses();
      this.goalsavings=this.calcGoalSavings();
      this.amountToSave = this.totalSavings();
      this.nongoalsavings=this.calcNonGoalSavings();
    }
    accomplishedSaving(a:number)
    {
      
      let name = this.savings[a].name;
      let paid = this.savings[a].paid;
      let id = this.savings[a].id;
      let achieved = this.savings[a].achieved;
      let fullfield = this.savings[a].fullfield;
      let fullamount = this.savings[a].fullamount;
      this.savingsAchieved.push({id:id,name:name,achieved:achieved, fullamount:fullamount, fullfield:fullfield,paid:paid})
      this.savings.splice(a,1);
      this.amountToSave = this.totalSavings();
      this.goalsavings=this.calcGoalSavings();
      this.nongoalsavings=this.calcNonGoalSavings();
      
      
    }
    calAccomplishedSavings(){
      this.totalAccomplishedSavings = 0;
      for(let i=0; i<this.savingsAchieved.length; i++)
      {
        this.totalAccomplishedSavings +=this.savingsAchieved[i].fullamount;
        
      }
      return this.totalAccomplishedSavings;
    }
    totalSavings()
    {
      let ToSave = 0;
      
      for(let i = 0; i < this.addedToSavings.length; i++)
      {
       ToSave +=this.addedToSavings[i].amount;
      }
      return ToSave - this.calAccomplishedSavings();
    }
    sendSaving(a:string,b:number,c:number)
    {
      this.savings.push({id:c,name:a, fullamount:b,paid:[],fullfield:{iffullfield:false,date: new Date()},achieved:0});   
    }
    withdrawSaving(a:number)
    {
      this.goalsavings -=this.savings[a].achieved;
      this.nongoalsavings+=this.savings[a].achieved;
      this.amountToSave += this.savings[a].achieved;
      this.savings.splice(a,1);     
    }
    addPaymentToGoal(a:number,b:number)
    {  
      this.savings[b].paid.push({amount:a,date: new Date()});
      this.amountAchieved(b);
      this.goalsavings+=a;
      this.nongoalsavings-=a;
    }
    amountAchieved(b:number)
    {
      this.savings[b].achieved = 0;
      for(let i = 0; i< this.savings[b].paid.length; i++)
      {      
        this.savings[b].achieved =this.savings[b].achieved + this.savings[b].paid[i].amount
        if(this.savings[b].achieved >= this.savings[b].fullamount)
        {
          this.savings[b].fullfield.iffullfield=true;
          this.savings[b].fullfield.date= new Date();
        }
      }
    }
   
    
    addChangeableExpense(a:string,b:string,c:number,d:boolean)
    {
      if(this.totalIncomeValue < c)
      {
        this.msg = "Uwaga zadłużasz się na kwotę " + (c-this.totalIncomeValue)+ "!";
      }
      this.expensesChangeable.push({id:this.expensesChangeable.length, name: a, category:b, amount:c, necessary:d,date: new Date()});
      //this.expensesChangeable = JSON.parse(JSON.stringify(this.expensesChangeable));
      this.totalIncomeValue -=c;
      this.totalExpense += c;
      this.totalChangeExpenses +=c;
    }

    deleteChangeableExpense(a:number)
    {
      let deletedAmount = this.expensesChangeable[a].amount;
      this.totalIncomeValue +=deletedAmount;
      this.totalExpense -= deletedAmount;
      this.totalChangeExpenses -=deletedAmount;
      this.expensesChangeable.splice(a-1,1);
    }
    
    addFixedExpense(a:string, b:number, c:Date)
    {
      this.expensesFixed.push({id:this.expensesFixed.length, name:a, amount:b, date:new Date(), duedate:c, ispaid:false})
    }
  
    deleteFixedExpense(a:number)
    {
      this.expensesFixed.splice(a-1,1);
    }
    calcGoalSavings():number{
      this.goalsavings = 0;
      for(let i =0; i<this.savings.length; i++)
      {
        this.goalsavings += this.savings[i].achieved;
      }
      return this.goalsavings;
    }
    calcNonGoalSavings():number{
      return this.totalSavings() - this.calcGoalSavings();
    } 
   cashSaving(a:number){
     this.amountToSave -= a;
     this.totalIncomeValue += a;
     this.nongoalsavings -=a;
   }
   
}
  
