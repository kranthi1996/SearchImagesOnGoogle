import {Salary} from '../models/salary.model';
export class Employe{
    Id:string;
    Name:string;
    Age:number;
    Salarys:Salary[];
    constructor(id,name,age,salarys){
        this.Id=id;
        this.Name=name;
        this.Age=age;
        this.Salarys=salarys;
    }
}