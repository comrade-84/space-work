//step 1
const planetLog = [
    {name: "mercury", distance:480, explored: false, type: 'rocky'},
    {name: "jubiter", distance:undefined, explored: true, type: 'gas'},
    {name: "saturn", distance:886, explored: true, type: 'gas'},
    {name: "uranus", distance:1800, explored: true, type: 'gas'},
    {name: "venus", distance:"", explored: true, type: 'rocky'},
    {name: "pluto", distance:3100, explored: false, type: 'ice'},
    {name: "neptune", distance:2100, explored: true, type: 'rocky'},
    {name: "mars", distance:350, explored: false, type: 'rocky'}

];
console.table(planetLog);

//step 2
for (let i = 0; i < planetLog.length; i++) {
    if (planetLog[i].explored === true ) { 
        console.table(` Explored: ${planetLog[i].name} - ${planetLog[i].type} `)
        
       
    }
    else{
        if (planetLog[i].distance < 100 && planetLog[i].explored === false) {
            console.table(` Explored: ${planetLog[i].name} - ${planetLog[i].distance} -Nearby`)
        }
        else{
            console.table(` Uncharted: ${planetLog[i].name} - ${planetLog[i].distance}M away`);
        }
        
       
    }
    
};

//step 3


// 

const validatePlanet = function(planet) {
    if (!planet.name || planet.name.trim() === "" || 
        planet.distance === undefined || planet.distance === "" || 
        planet.explored === undefined || 
        !planet.type || planet.type.trim() === "") {
        return `Error: ${planet.name || "Unknown"} has incomplete data!`;
    }
    return `${planet.name} has complete data`;
};

for ( x in planetLog) {
    const result = validatePlanet(planetLog[x]);
    console.table(result);  
};

//step 4

const getClosePlanets = function() {
    const closePlanets = planetLog.filter(planet => planet.distance < 200 && planet.explored === false );
    if (closePlanets.length > 0) {
        console.table(closePlanets);
    }
    else{
        console.log(`no close or unexplored planets!`);
    }
}
getClosePlanets();

//step 5 




const markExplored = function(name) {
    const planet = planetLog.find(p => p.name.toLowerCase().includes(name.toLowerCase()));
    
    if (planet && planet.explored === true) {
        console.log(`${planet.name} has already been explored.`);
    } else {
        console.log(`Please provide a valid planet name.`);
    }
};

markExplored('jubiter');




























// Mercury
// 48 - 160
// Yes
// Venus
// 25 - 260
// Yes
// Mars
// 35 - 250
// Yes
// Jupiter
// 367 - 700
// Yes
// Saturn
// 886 - 1,200
// Yes
// Uranus
// 1,800 - 2,800
// Yes
// Neptune
// 2,800 - 4,300
// Yes
