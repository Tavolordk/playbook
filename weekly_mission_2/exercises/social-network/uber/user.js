export const user = {
    name:"Octavio",
    surname:"Olea",
    email:"ejemplo@gmail.com",
    password:"12345678",
    age:25,
    status:"single",
    hobbies:["Programar","Leer"],
    getNameSurname:function(){
        return `${this.name} ${this.surname}`;
    }
}
console.log(user.getNameSurname());