export class Project {
    id?: number;
    name: string;
    description: string;
    url_image: string;
    url_liveDemo: string;
    url_sourceCode: string;
    constructor(name: string, description: string, url_image: string, url_liveDemo: string, url_sourceCode: string){
        this.name = name;
        this.description = description;
        this.url_image = url_image;
        this.url_liveDemo = url_liveDemo;
        this.url_sourceCode = url_sourceCode;
    }
}
