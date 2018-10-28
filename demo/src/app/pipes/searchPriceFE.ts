import {Pipe, PipeTransform} from '@angular/core';
import { FixedExpenses } from '../interfaces/fixedexpenses';


@Pipe({name:'searchPriceFE'})
export class SearchPriceFE implements PipeTransform 
{
    transform(fixedExpense:Array<FixedExpenses>,min:number,max:number):Array<FixedExpenses>
    {
        if (min == undefined) 
        {
            min = 0;
        }
        if (max == undefined)
        {
            max = 1000000;
        }
       return fixedExpense.filter(fix => fix.amount >= min && fix.amount<= max);   
    }    
}