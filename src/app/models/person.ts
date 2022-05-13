export class Person {
    id?: number;
    fullname: string;
    ocupation: string;
    intitution: string;
    url_institution: string;
    url_pfp: string;
    url_banner: string;

    constructor(fullname: string, ocupation: string, intitution: string, url_institution: string, url_pfp: string, url_banner: string) {
        this.fullname = fullname;
        this.ocupation = ocupation;
        this.intitution = intitution;
        this.url_institution = url_institution;
        this.url_pfp = url_pfp;
        this.url_banner = url_banner;
     }
}
