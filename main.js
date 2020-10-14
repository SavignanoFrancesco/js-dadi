//Esercitazione 2: Gioco dei dadi
//Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
//Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
//Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.


//generazione randomica dei dadi
var dice1 = Math.floor(Math.random() * (6) ) + 1;
var dice2 = Math.floor(Math.random() * (6) ) + 1;
console.log("dado1: ", dice1);
console.log("dado2: ", dice2);
document.getElementById("dado1").innerHTML = dice1;
document.getElementById("dado2").innerHTML = dice2;


//Condizioni vittoria sconfitta pareggio
if (dice1 > dice2){
    console.log("VINCE GIOCATORE 1!!");
    document.getElementById("risultato").innerHTML = "VINCE GIOCATORE 1!!";
}else if (dice1 == dice2) {
    console.log("PAREGGIO!");
    document.getElementById("risultato").innerHTML = "PAREGGIO!!";
}else{
    console.log("VINCE GIOCATORE 2!!");
    document.getElementById("risultato").innerHTML = "VINCE GIOCATORE 2!!";
}
