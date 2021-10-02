// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
const input = require('readline-sync');

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = input.question("How many astronauts are going on this trip? ");
astronautCount = (Number(astronautCount));
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";


// Write code to generate the LC04 report here:
console.log("\n-------------------------------------");
console.log("> LC04 - LAUNCH CHECKLIST");
console.log("-------------------------------------");
console.log("Date:", date);
console.log("Time:", time, "\n");

console.log("-------------------------------------");
console.log("> ASTRONAUT INFO");
console.log("-------------------------------------");
console.log("* count:", astronautCount);
console.log("* status:", astronautStatus, "\n");

console.log("-------------------------------------");
console.log("> FUEL DATA");
console.log("-------------------------------------");
console.log("* Fuel temp celsius:", fuelTempCelsius, "C");
console.log("* Fuel level:", fuelLevel, "\n");

console.log("-------------------------------------");
console.log("> MASS DATA");
console.log("-------------------------------------");
console.log("* Crew mass:", crewMassKg, "kg");
console.log("* Fuel mass:", fuelMassKg, "kg");
console.log("* Shuttle mass:", shuttleMassKg, "kg");
console.log("* Total mass:", totalMassKg, "kg\n");

console.log("-------------------------------------");
console.log("> FLIGHT PLAN");
console.log("-------------------------------------");
console.log("* weather:", weatherStatus, "\n");

console.log("-------------------------------------");
console.log("> OVERALL STATUS");
console.log("-------------------------------------");
console.log("* Clear for takeoff: YES");

// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.