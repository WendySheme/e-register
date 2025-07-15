export class ApiResponse <T = any> {

message?: string;
data?: T;
error?:string;
details?: any;



}

export interface PaginatedResponse<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}