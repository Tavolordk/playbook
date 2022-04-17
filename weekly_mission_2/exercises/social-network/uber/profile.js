import {user} from '../user';
export const profile={
    alias:"Tavolordk",
    reputation:"*****",
    comments:"Buen cliente, da buena propina",
    getAllInformation:function(){
        return `${this.alias} ${this.reputation} ${this.comments}`;
    }
}
console.log(user.getAllInformation());
console.log(profile.getAllInformation());