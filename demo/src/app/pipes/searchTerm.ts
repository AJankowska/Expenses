import {Pipe, PipeTransform} from '@angular/core';
import {ChangeableExpenses } from '../interfaces/changeexpenses';


@Pipe({name:'searchTerm'})
export class SearchTerm implements PipeTransform 
{
    transform(changeableExpense:Array<ChangeableExpenses>,term:string):Array<ChangeableExpenses>
    {
       return changeableExpense.filter(change => change.name.indexOf(term)!== -1);   
    }    
}