let candidateA = {
    'name':'Gordon Shumway',
    'species':'alf',
    'mass':90,
    'o2Used':function(hrs){return 0.035*hrs},
    'astronautID':414
  };
let candidateB = {
    'name':'Lassie',
    'species':'dog',
    'mass':19.1,
    'o2Used':function(hrs){return 0.030*hrs},
    'astronautID':503
  };
let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'o2Used':function(hrs){return 0.022*hrs},
    'astronautID':796
  };
let candidateD = {
    'name':'Paddington',
    'species':'bear',
    'mass':31.8,
    'o2Used':function(hrs){return 0.047*hrs},
    'astronautID':291
  };
let candidateE = {
    'name':'Pete',
    'species':'tortoise',
    'mass':417,
    'o2Used':function(hrs){return 0.010*hrs},
    'astronautID':599
  };
let candidateF = {
    'name':'Hugs',
    'species':'ball python',
    'mass':2.3,
    'o2Used':function(hrs){return 0.018*hrs},
    'astronautID':890
  };
  
let crew = [candidateB,candidateD,candidateF];  

// Code your crewMass function here:
function crewMass(crewArray) {
    return Math.round((crew[0].mass + crew[1].mass + crew[2].mass)*10)/10;
}

// Code your fuelRequired function here:
function fuelRequired(crewMass) {
    let totalMass = 75000 + crewMass;
    for (let i = 0; i < crew.length; i++) {
        if (crew[i].species === 'dog' || 'cat') {
            totalMass += 200;
        } else {
            totalMass += 100;
        }
    }
    return Math.ceil(totalMass*9.5);
}

console.log(`The mission has a launch mass of ${Math.ceil(fuelRequired(crewMass(crew))/9.5)} kg and requires ${fuelRequired(crewMass(crew))} kg of fuel.`);