import {user} from './user.js';
export const hashtag={
    title:"#Node",
    category:"Tecnología",
    size:4,
    getAllInformation:function(){
        return `${this.title} ${this.category} ${this.size}`;
    }
}
console.log(user.getAllInformation);
console.log(hashtag.getAllInformation());