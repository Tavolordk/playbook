import Github from "./github";

export default class Issue extends Github{
    title;
    repositoryNameAssociated;
    status;
    numberOfComments;
    labels;
    author;
    dateCreated;
    lastUpdated;
    getTitleAndAuthor(){
        return this.title +' ' + this.author;
    };
    getGeneralInfo(){
        return `This Issue ${this.repositoryNameAssociated} was created by ${this.author}`;
    };
}