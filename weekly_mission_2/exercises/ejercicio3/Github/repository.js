import Github from "./github"

export default class Repository extends Github{
    name
    author
    language
    numberOfCommits
    stars
    forks
    issues_open
    issues_close
    getTotalIssues(){
      return this.issues_open + this.issues_close;
    }
    getGeneralInfo(){
      return `This repository ${this.name} was created by ${this.author}`;
    }
   }