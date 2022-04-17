import User from "./user";
export default class TrendingTopic extends User{
    title;
    description;
    createdBy;
    date;
    getAllInformation(){
        return `${this.title} ${this.description} ${this.createdBy}
        ${this.date}`;
    }
}