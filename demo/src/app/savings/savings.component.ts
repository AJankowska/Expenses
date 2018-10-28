import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, Form } from '@angular/forms';
import { MainService } from '../services/main.service';
import { Saving } from '../interfaces/saving';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {
  searchTerm:string=null;
  validatingForm: FormGroup;
  goalsavings:number=this._service.goalsavings;
  totalsavings:number=this._service.amountToSave;
  nongoalsavings:number= this._service.nongoalsavings;
  savings:Array<Saving> = this._service.savings;
  msg:string;
  amount:number=0;
  savingIndex:number;
  cash: any;
  submitted:boolean=false;
  constructor(private fb: FormBuilder, private _service:MainService) {
    
 

  }
  ngOnInit() {
      this.goalsavings=this._service.goalsavings;
    this.totalsavings=this._service.amountToSave;
    this.nongoalsavings= this._service.nongoalsavings;
    this.validatingForm = this.fb.group({
      'savingName': [null, Validators.required],
      'savingAmount':[null, Validators.required],
  });
  }
  get f() { return this.validatingForm.controls; };
  onSubmit() {
    this.submitted = true;

    //stop when invalid
    if (this.validatingForm.invalid) {
        return;
    }
  }
  accomplishedSaving(){
    this._service.accomplishedSaving(this.savingIndex);
    this.goalsavings=this._service.goalsavings;
    this.nongoalsavings= this._service.nongoalsavings;
    this.totalsavings=this._service.amountToSave;
  }
  sendSaving(a:string,b:number,c=this._service.savings.length){
    this._service.sendSaving(a,b,c);
    this.validatingForm.reset();  
    }
    add(b:number){ 
      if(this.amount <= this.nongoalsavings)
      {
      this._service.addPaymentToGoal(this.amount,b);    
      this.amount= null;
      this.goalsavings=this._service.goalsavings;
      this.nongoalsavings= this._service.nongoalsavings;
      }
      else
      {
        this.msg="Nie masz tyle do przeznaczenia! Musisz dodać więcej do oszczędności";
        alert(this.msg);
      }
    }
    withdrawSaving(){
      this._service.withdrawSaving(this.savingIndex);
      this.goalsavings=this._service.goalsavings;
      this.nongoalsavings= this._service.nongoalsavings;
      this.totalsavings=this._service.amountToSave;
    }

  sendSavingIndex(a:number)
  {
    this.savingIndex = a;
    
  }
  cashSaving()
  {
    if(this.cash <=this.nongoalsavings)
    {
    this._service.cashSaving(this.cash);
    this.nongoalsavings= this._service.nongoalsavings;
    this.totalsavings=this._service.amountToSave;
    }
    else
    {
      this.msg = "Musisz pierw zrezygnować z jakiegoś celu";
      alert(this.msg);
    }
  }
}
