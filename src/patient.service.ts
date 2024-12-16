import PersonalDetails from "./data.interface"
import { DEPT, GENDER } from "./enum"


export interface PatientService{

 addPatient(patientInfo:PersonalDetails):Promise<PersonalDetails>
 getPatient(id:number):Promise<PersonalDetails>
 getAllPatient():Promise<PersonalDetails[]>
 updatePatient(id:number,patientInfo:PersonalDetails):Promise<PersonalDetails>
 deletePatient(id:number):Promise<void>
 getPatientByGender(gender:GENDER):Promise<PersonalDetails[]>
 getPatientByDepartment(dept:DEPT):Promise<PersonalDetails[]>

}