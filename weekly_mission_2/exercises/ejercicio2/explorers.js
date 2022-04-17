const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   /* 1-Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH */
   explorers.forEach(item=>console.log(item.name));
   /* 2-Imprime el stack de cada explorer, usa FOR EACH */
   let each = explorers.forEach(item=>item.stack.forEach(items=>console.log(items)))
   console.log(each)
   /* 3-Crea una nueva lista con las listas de stacks de cada explorer, usa MAP */
   let mapear=explorers.map((item)=>{return item.stack.toString()});
   console.log(mapear);
 /*Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes) */
 let filtro=explorers.filter(item=>{
    return item.stack.includes("js");
}).map(item=>{
    return item.name;
})

console.log(filtro); 
/* Busca el primer explorer que sea de la CDMX, usa FIND */
let busqueda=explorers.find(user=>{
    return user.city=="CDMX";
});

console.log(busqueda.name);
/* Obtén la suma de todos los exercises_completed, usa REDUCE */

let sumaExercisesCompleted = explorers.map(item=>{
    return item.exercises_completed;
});

let reducido = sumaExercisesCompleted.reduce((a,b)=>{return a+b});
console.log(reducido);
/* Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME */
let exercisesFinished = explorers.some(item=>{return item.missions.frontend.exercisesFinished==true});
console.log(exercisesFinished);
/* Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY. */
let isFinished = explorers.every(item=>{
    return item.missions.onboarding.isFinished==true
});
console.log(isFinished);