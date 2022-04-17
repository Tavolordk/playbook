import User from "./user";
export default class Profile extends User{
    alias;
    reputation;
    comments;
    getAllInformation(){
        return `${this.alias} ${this.reputation} ${this.comments}`;
    }
}
