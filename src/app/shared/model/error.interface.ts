export class Error {

code: number;
message: string;
details?: any;
timestamp: Date;



}

export class ValidationError 
{
    field: string;
    message: string;
    value?:any;
}