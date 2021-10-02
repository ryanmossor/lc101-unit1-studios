// Code your orbitCircumference function here:
let orbitRadius = 2000;
let orbitalSpeed = 28000;
let orbitCount = 5;

function orbitCircumference (radius) {
    return Math.round(2*Math.PI*radius);
}

// Code your missionDuration function here:
function missionDuration (orbitCount, orbitRad = 2000, orbitSpeed = 28000) {
    let distance = orbitCircumference(orbitRad)*orbitCount;
    let time = distance / orbitSpeed;
    return Math.round(time*100)/100;
}

console.log(`The mission will travel ${orbitCount*orbitCircumference(orbitRadius)} km around the planet, and it will take ${missionDuration(orbitCount, orbitRadius, orbitalSpeed)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry (arr) {
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate) {
    let duration = missionDuration(3, 1000, 10000);
    let oxygenConsumed = Math.round(candidate.o2Used(duration)*1000)/1000;
    return console.log(`${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenConsumed} kg of oxygen.`);
}

// Candidate data & crew array.
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

let crew = [candidateA,candidateC,candidateE];

oxygenExpended(selectRandomEntry(crew));