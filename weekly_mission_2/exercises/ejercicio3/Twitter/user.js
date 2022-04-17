export default class User{
    name;
    surname;
    email;
    password;
    age;
    status;
    hobbies=[];
    getNameSurname(){
        return `${this.name} ${this.surname}`;
    }
}