const MissionCommander = require('./app/missionCommander');
const octavio = new MissionCommander("octavio");
const pedro = new MissionCommander("pedro");
const josue = new MissionCommander("josue");

console.log(octavio.name);
console.log(pedro.name);
console.log(josue.name);