import Entity from "./entity";

export default class Character extends Entity {
    firstName = "";
    lastName = "";
    age = 0;
    constructor(firstName: string, lastName: string, age: number) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}