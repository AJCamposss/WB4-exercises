let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

let myAverage = getAverage(myScores);
let yourAverage = getAverage(yourScores);

function getAverage(displayedScores) {
    let average = 0;

    for(let i = 0; i < displayedScores.length; i++) {
        average = average + displayedScores[i] / displayedScores.length
    }
    
    return average;
}

console.log(myAverage)
console.log(yourAverage)