import User from "./user";

export default class Hashtag extends User{
    title;
    category;
    size;
    getAllInformation(){
        return `${this.title} ${this.category} ${this.size}`;
    }
}