export class Movie {
    public id: string;
    public title: string;
    public year: number;
    public poster: string;

    constructor( id: string, title: string, year: number, poster: string){
        this.id = id;
        this.title = title;
        this.year = year;
        this.poster = poster;
    }
}
