import PersonalDetails from "./data.interface";
import { DEPT, GENDER } from "./enum";
import { PatientService } from "./patient.service";



export class PatientServiceImpl implements PatientService{
   patients:PersonalDetails[] = [];
   async addPatient(patientInfo: PersonalDetails): Promise<PersonalDetails> {

        throw new Error("Method not implemented.");
    }
    async getPatient(id: number): Promise<PersonalDetails> {
        throw new Error("Method not implemented.");
    }
    async getAllPatient(): Promise<PersonalDetails[]> {
        return this.patients
    }
    async updatePatient(id: number, patientInfo: PersonalDetails): Promise<PersonalDetails> {
        throw new Error("Method not implemented.");
    }
    async deletePatient(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getPatientByGender(gender: GENDER): Promise<PersonalDetails[]> {
        throw new Error("Method not implemented.");
    }

    async getPatientByDepartment(dept: DEPT): Promise<PersonalDetails[]> {
        throw new Error("Method not implemented.");
    }
    
}