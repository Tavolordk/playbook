import {user} from './user.js';
export const biography ={
    fullName:"Octavio Olea",
    likes:["50 Cent","Mark Zuckerberg","Apple"],
    friends:500,
    activity:"compartiste la publicación de Miguel",
    birthdayDate:"05-08-1996",
    getAllInformation:function(){
        return `${this.fullName} ${this.likes.forEach(item=>console.log(item))} ${this.friends}
        ${this.activity} ${this.birthdayDate}`;
    }
}
console.log(user.getAllInformation);
console.log(biography.getAllInformation());