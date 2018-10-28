import {Pipe, PipeTransform} from '@angular/core';
import {ChangeableExpenses } from '../interfaces/changeexpenses';


@Pipe({name:'searchPriceChE'})
export class SearchPriceChE implements PipeTransform 
{
    transform(changeableExpense:Array<ChangeableExpenses>,min:number,max:number):Array<ChangeableExpenses>
    {
        if (min == undefined) 
        {
            min = 0;
        }
        if (max == undefined)
        {
            max = 1000000;
        }
       return changeableExpense.filter(change => (change.amount >= min && change.amount<= max));   
    }    
}