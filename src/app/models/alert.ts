import Entity from "./entity";
import IBrief from "./interfaces/i-brief";

export default class Alert extends Entity implements IBrief {
    constructor(message: string, header: string) {
        super();
        this.message = message;
        this.header = header;
    }

    message: string = "";
    header: string = "";
}
