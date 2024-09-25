import Entity from "./entity";
import { Sex } from "./enumerations/sex";

export default class Character extends Entity {
    firstName = "";
    lastName = "";
    age = 0;
    sex = Sex.OTHER;
    title = "";

    constructor(firstName: string, lastName: string, age: number, sex: Sex, title: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.sex = sex;
        this.title = title;
    }
}