import {issue} from './issue.js';
const pullRequest={
title:"Solicitud de merge con repo original",
branchName:"develop",
dateCreated:"15-04-2022",
status:"Pendiente de aprobación",
repositoryNameAssociated:"Tavolordk/playbook",
getStatus:function(){
return `Pull Request: ${this.title} con Estatus: ${this.status}`;
},
getTitleAndAutor:function(){
    return`${this.title} by ${issue.author}`
}
}

console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAutor());