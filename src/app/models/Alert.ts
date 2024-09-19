export default class Alert {
    constructor(message: string, header: string) {
        this.message = message;
        this.header = header;


    }

    message: string = "";
    header: string = "";
}