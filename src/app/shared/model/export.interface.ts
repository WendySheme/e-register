export interface Export {

studentId: number;
startDate: Date;
endDate: Date;
format: ExportFormat;
type: ReportType;

}


export enum ExportFormat {
    csv = 'csv',
    pdf = 'pdf',
}

export enum ReportType {
    montly = 'monthly',
    yearly = 'yearly',
    custom = 'custom',
    studentSummary = 'studentSummary',
}