import Choice from "./choice";
import Entity from "./entity";
import IBrief from "./interfaces/i-brief";

export default class Decision extends Entity implements IBrief {

    header = "";
    description = "";
    image = "";
    choices: Choice[] = [];

    constructor(header: string, description: string, image: string, choices: Choice[]) {
        super();
        this.header = header;
        this.description = description;
        this.image = image;
        this.choices = choices;   
    }
}