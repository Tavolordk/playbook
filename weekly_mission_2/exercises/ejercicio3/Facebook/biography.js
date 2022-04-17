import User from "./user";

export default class Biography extends User{
    fullName;
    likes=[];
    friends;
    activity;
    birthdayDate;
    getAllInformation(){
        return `${this.fullName} ${this.likes.forEach(item=>console.log(item))} ${this.friends}
        ${this.activity} ${this.birthdayDate}`;
    }
}