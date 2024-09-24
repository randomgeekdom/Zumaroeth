import Entity from "./entity";

export default class Choice extends Entity {
    header = "";
    description = "";
    image = "";

    constructor(header: string, description: string, image: string) {
        super();
        this.header = header;
        this.description = description;
        this.image = image;
    }
}