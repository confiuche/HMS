import PersonalDetails from "./data.interface"
import { DEPT, GENDER } from "./enum"


export interface DocService{

 addDoctor(DoctorInfo:PersonalDetails):Promise<PersonalDetails>
 getDoctor(id:number):Promise<PersonalDetails>
 getAllDoctor():Promise<PersonalDetails[]>
 updateDoctor(id:number,DoctorInfo:PersonalDetails):Promise<PersonalDetails>
 deleteDoctor(id:number):Promise<void>
 getDoctorByGender(gender:GENDER):Promise<PersonalDetails[]>
 getDoctorByDepartment(dept:DEPT):Promise<PersonalDetails[]>

}