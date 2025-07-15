import { Attendance } from "./attendance.interface";

export class CalendarDays {
date: Date;
day: number;
isCurrentMonth:boolean;
isToday: boolean;
attendance?: Attendance;

}


export class CalendarMonths 
{
year:number;
month:number;
days: CalendarDays;
displayName: string;


}