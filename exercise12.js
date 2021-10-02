let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID: 1,
    move: function () {
        return Math.floor(Math.random()*11);
    }
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID: 2,
    move: function () {
        return Math.floor(Math.random()*11);
    }
};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    astronautID: 3,
    move: function () {
        return Math.floor(Math.random()*11);
    }
};

let beagle = {
    name: "Leroy",
    species: "beagle",
    mass: 14,
    age: 5,
    astronautID: 4,
    move: function () {
        return Math.floor(Math.random()*11);
    }
};

let tardigrade = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    astronautID: 5,
    move: function () {
        return Math.floor(Math.random()*11);
    }
};

let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];

function crewReports(animal) {
    return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

for (let i = 0; i < crew.length; i++) {
    console.log(crewReports(crew[i]));
}

function fitnessTest(arr) {
    let numberOfMoves = [];
    for (let i = 0; i < arr.length; i++) {
        let steps = 0;
        let moveCount = 0;
        while (steps < 20) {
            steps += arr[i].move();
            moveCount++;
        }
        numberOfMoves.push(`${arr[i].name} took ${moveCount} turns to take 20 steps.`);
    }
    return numberOfMoves.join(' \n');
}

console.log('\n' + fitnessTest(crew));

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!