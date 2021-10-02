//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

class CrewCandidate {
   constructor(name, mass, scores) {
      this.name = name;
      this.mass = mass;
      this.scores = scores;
   }

   addScore(newScore) {
      this.scores.push(newScore);
   }

   average(scoreArray = this.scores) {
      let scoreTotal = 0;
      for (let i = 0; i < scoreArray.length; i++) {
         scoreTotal += scoreArray[i];
      }
      return Math.round((scoreTotal / scoreArray.length)*10)/10;
   }

   status() {
      if (this.average() <= 69.9) {
         return 'Rejected';
      } else if (this.average() >= 70 && this.average() <= 79.9) {
         return 'Probationary';
      } else if (this.average() >= 80 && this.average() <= 89.9) {
         return 'Reserve';
      } else {
         return 'Accepted';
      }
   }
}

let bear = new CrewCandidate ('Bubba Bear', 135, [88, 85, 90]);
let dog = new CrewCandidate ('Merry Maltese', 1.5, [93, 88, 97]);
let gator = new CrewCandidate ('Glad Gator', 225, [75, 78, 62]);

bear.addScore(83);
console.log(bear.scores);

console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`)

console.log(`${dog.name} earned an average test score of ${dog.average()}% and has a status of ${dog.status()}.`)

console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`)

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

while (gator.average() < 90) {
   gator.addScore(100);
   gator.average();
}

console.log(`${gator.name} will need to earn perfect scores on ${gator.scores.length - 3} additional tests in order to be accepted.`);

console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`)