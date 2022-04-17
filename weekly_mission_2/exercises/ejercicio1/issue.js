export const issue ={
    title:"Ejemplo Issue",
    repositoryNameAssociated:"playbook",
    status:"cerrado",
    numberOfComments:4,
    labels:"Node Js",
    author:"Tavolordk",
    dateCreated:"13-04-2022",
    lastUpdated:"15-04-2022",
    getTitleAndAuthor:function(){
        return this.title +' ' + this.author;
    },
    getGeneralInfo:function(){
        return `This Issue ${this.repositoryNameAssociated} was created by ${this.author}`;
    }
}

console.log("Nombre del issue:" + issue.title);
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());