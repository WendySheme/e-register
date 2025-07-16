


export class AppError {

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