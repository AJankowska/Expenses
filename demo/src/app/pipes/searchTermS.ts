import {Pipe, PipeTransform} from '@angular/core';
import { Saving } from '../interfaces/saving';


@Pipe({name:'searchTermS'})
export class SearchTermS implements PipeTransform 
{
    transform(savings:Array<Saving>,term:string):Array<Saving>
    {
       return savings.filter(s => s.name.indexOf(term)!== -1);   
    }    
}