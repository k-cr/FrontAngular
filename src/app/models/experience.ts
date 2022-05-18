export class Experience {
    id?: number;
    startDate: string;
    finishDate: string;
    ocupation: string;
    otherInformation: string;
    constructor(startDate: string, finishDate: string, ocupation: string, otherInformation: string){
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.ocupation = ocupation;
        this.otherInformation = otherInformation;
    }
}
