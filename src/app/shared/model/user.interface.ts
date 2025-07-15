export class User {
id: string;
email:string;
name: string;
surname: string;
role: UserRole;
studentId?: string;
tutorId?: string;
student?:User [];
assignedTutor?:User;
assignedTutorId?: string;
createdAt: Date;
updatedAt: Date;
isActive: boolean;


constructor(id: string, email: string, name: string, surname: string, role: UserRole, createdAt: Date, updatedAt: Date, isActive: boolean) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isActive = isActive;
  }


}
export enum UserRole {
    STUDENT = 'STUDENT',
    TUTOR = 'TUTOR',
    ADMIN = 'ADMIN',

}
