
import { v4 as uuid } from 'uuid'; 

export default abstract class Entity {
    id: string;

    constructor() {
        this.id = uuid();
    }
}
