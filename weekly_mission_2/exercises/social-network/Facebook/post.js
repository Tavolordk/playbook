export const post={
    title:"Mi primer post",
    description:"Aquí estoy mejorando mis habilidades de JS",
    date:"14-04-2022",
    getAllInformation:function(){
        return `${this.title} ${this.description} ${this.date}`;
    }
}
console.log(post.getAllInformation());