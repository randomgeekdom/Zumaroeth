import Entity from "./entity";
import { Sex } from "./enumerations/sex";

export default class Character extends Entity {
    firstName = "";
    lastName = "";
    age = 0;
    sex = Sex.OTHER;
    constructor(firstName: string, lastName: string, age: number, sex: Sex = Sex.OTHER) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.sex = sex;
    }
}