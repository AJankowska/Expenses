
import { Payment } from "./payment";

export interface Saving{
    id: number
    name: string
    fullamount:number
    paid:Array<Payment>
    fullfield:{
        iffullfield:boolean
        date:Date
    }
   achieved:number
}