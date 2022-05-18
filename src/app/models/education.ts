export class Education {
    id?: number;
    startDate: string;
    finishDate: string;
    degree: string;
    otherInformation: string;
    constructor(startDate: string, finishDate: string, degree: string, otherInformation: string){
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.degree = degree;
        this.otherInformation = otherInformation;
    }
}
