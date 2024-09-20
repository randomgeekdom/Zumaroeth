import Entity from "./entity";

export default class Alert extends Entity {
    constructor(message: string, header: string) {
        super();
        this.message = message;
        this.header = header;
    }

    message: string = "";
    header: string = "";
}