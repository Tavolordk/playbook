import Github from "./github";
export default class PullRequest extends Github{
    title;
    branchName;
    dateCreated;
    status;
    repositoryNameAssociated;
    getStatus(){
    return `Pull Request: ${this.title} con Estatus: ${this.status}`;
    };
    getTitleAndAutor(){
        return`${this.title} by ${issue.author}`
    };
    }