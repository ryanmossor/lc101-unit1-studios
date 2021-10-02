// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];
let randomIDnumbers = [];

function selectRandomEntry (arr) {
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

while (randomIDnumbers.length < 3) {
    let selectedEntry = selectRandomEntry(idNumbers);
    if (!randomIDnumbers.includes(selectedEntry)) {
        randomIDnumbers.push(selectedEntry);
    }
}

console.log(randomIDnumbers);

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
  
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let crew = [];

// Code your buildCrewArray function here:
function buildCrewArray (idArray, candidateArray) {
    for (let i = 0; i < idArray.length; i ++) {
        for (let j = 0; j < candidateArray.length; j++) {
            if (candidateArray[j].astronautID === idArray[i]) {
                crew.push(candidateArray[j]);
            }
        }
    }
    return crew;
}


// Code your template literal and console.log statements:
buildCrewArray(randomIDnumbers, animals);
console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`);