import PersonalDetails from "./data.interface";
import { DocService } from "./doctor.service";
import { DEPT, GENDER } from "./enum";




export class DoctorServiceImpl implements DocService{
   doctors:PersonalDetails[] = [];
    async addDoctor(DoctorInfo: PersonalDetails): Promise<PersonalDetails> {

        throw new Error("Method not implemented.");
    }
    getDoctor(id: number): Promise<PersonalDetails> {
        throw new Error("Method not implemented.");
    }
    async getAllDoctor(): Promise<PersonalDetails[]> {
        //throw new Error("Method not implemented.");
        return this.doctors;
    }
     async updateDoctor(id: number, data: PersonalDetails): Promise<PersonalDetails> {
        throw new Error("Method not implemented.");
    }
    async deleteDoctor(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getDoctorByGender(gender: GENDER): Promise<PersonalDetails[]> {
        throw new Error("Method not implemented.");
    }

    async getDoctorByDepartment(dept: DEPT): Promise<PersonalDetails[]> {
        throw new Error("Method not implemented.");
    }
    
}