export const trendingTopic={
    title:"Node Js",
    description:"Aprendiendo Node",
    createdBy:"@octavio",
    date:"13-04-2022",
    getAllInformation:function(){
        return `${this.title} ${this.description} ${this.createdBy}
        ${this.date}`;
    }
}
console.log(trendingTopic.getAllInformation());