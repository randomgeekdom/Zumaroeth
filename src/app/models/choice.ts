import Entity from "./entity";

export default class Choice extends Entity {
    header = "";
    description = "";
    image = "";
    action: () => void;

    constructor(header: string, description: string, image: string, action: () => void) {
        super();
        this.header = header;
        this.description = description;
        this.image = image;
        this.action = action;
    }
}