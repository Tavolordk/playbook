import User from "./user";
export default class Post extends User{
    title;
    description;
    date;
    getAllInformation(){
        return `${this.title} ${this.description} ${this.date}`;
    }
}