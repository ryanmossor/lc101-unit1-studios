//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.
const input = require('readline-sync');

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let carbs = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let drinks = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
for (let i = 0; i < 6; i++) {
    let meals = [protein[i], carbs[i], veggies[i], drinks[i], desserts[i]];
    console.log(meals);
}

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
let numberOfMeals = input.question('How many meals should we make? ');

while (numberOfMeals < 0 || numberOfMeals > 6 || isNaN(numberOfMeals)) {
    console.log('Invalid input. Please enter a number between 1 and 6.');
    numberOfMeals = input.question('How many meals should we make? ');
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”
let pantry = [protein, carbs, veggies, drinks, desserts];

for (let i = 0; i < numberOfMeals; i++) {
    console.log(`Astronaut ${[i + 1]}'s meal contains: ${protein[i]}, ${carbs[i]}, ${veggies[i]}, ${drinks[i]}, ${desserts[i]}.`);
    if (veggies[i].includes('kale') || desserts[i].includes('kale')) {
        console.log("\tDon't worry, you can have double chocolate tomorrow.");
    }
}