import { DEPT, GENDER } from "./enum";
import { personalInher } from "./personal";

class DoctorInfo extends personalInher{
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public gender: GENDER,
        public position: string,
        public department: DEPT
    ){
        super(id, name, age, gender)
    }
    displayPersonalInfo(): string {
        return `${super.displayPersonalInfo()}, Postition: ${this.position}, Department: ${this.department}`
    }
}

const doc = new DoctorInfo(1, "", 20, GENDER.MALE, "CE0", DEPT.SURGERY)
console.log(doc.displayPersonalInfo());

