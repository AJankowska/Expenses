import {Pipe, PipeTransform} from '@angular/core';
import {ChangeableExpenses } from '../interfaces/changeexpenses';


@Pipe({name:'unnecessary'})
export class Unnecessary implements PipeTransform 
{
    transform(changeableExpense:Array<ChangeableExpenses>):Array<ChangeableExpenses>
    { 
        console.log('weszlo ' + JSON.stringify(changeableExpense));
        let o:Array<ChangeableExpenses> = changeableExpense.filter(change => change.necessary==false); 
        console.log('wyszlo ' + JSON.stringify(o));
        return o;
    }    
}