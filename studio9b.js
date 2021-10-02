//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!

let root = 'Rutabagas';
let subject = 'Chemistry';

let combinedString = '';

for (let i = 0; i < root.length; i++) {
    combinedString += root[i] + subject[i];
}

console.log(combinedString);