"use script"
let userScore = Math.round(Math.random() * (5) + 1);
console.log (userScore);
document.getElementById(`player-number`).innerHTML = userScore;

let iaScore = Math.round(Math.random() * (5) + 1);
console.log (iaScore);
document.getElementById(`pc-number`).innerHTML = iaScore;

if (userScore > iaScore){
    console.log(`HAI VINTO`);
    document.getElementById(`gameResult`).innerHTML = `HAI VINTO!`
}
else if ( userScore < iaScore){
    console.log(`HAI PERSO`);
    document.getElementById(`gameResult`).innerHTML = `HAI PERSO.`
}
