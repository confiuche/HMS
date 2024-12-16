import { DEPT, GENDER } from "./enum";

interface PersonalDetails {
    id: number;
    name: string;
    gender:GENDER;
    age: string;
    department: DEPT
    position: string;
  }

export default PersonalDetails  

  