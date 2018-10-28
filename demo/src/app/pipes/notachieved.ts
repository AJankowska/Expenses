import {Pipe, PipeTransform} from '@angular/core';
import {Saving} from '../interfaces/saving';


@Pipe({name:'notachieved'})
export class NotAchieved implements PipeTransform 
{
    transform(saving:Array<Saving>):Array<Saving>
    { 
        return saving.filter(s => s.fullfield.iffullfield == false); 
    }    
}