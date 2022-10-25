"use strict"
//Chiedere la mail
//Controllare se la mail si trova nella lista
//Stampare messaggio di controllo
const mail= ["sergio@email.com","marco@email.com","zanin@email.com"];

const userMail=(prompt("Inserisci la tua mail"));
const index=mail.indexOf(userMail);
if (index >= 0){
    alert("Congratulazioni la sua mail è presente")
}else{
    alert("Mi dispiace la sua mail non è presente")
}