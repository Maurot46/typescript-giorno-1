let numeroCasuale = Math.floor((Math.random() *100) + 1);
let giocatore1 = Math.floor((Math.random() *100) + 1);
let giocatore2 = Math.floor((Math.random() *100) + 1);

console.log("Numero casuale generato", numeroCasuale);
console.log("Numero giocatore 1:", giocatore1);
console.log("Numero giocatore 2:", giocatore2);

if (giocatore1 == numeroCasuale) {
    console.log('Il giocatore 1 ha indovinato');
    } else if (giocatore2 == numeroCasuale) {
        console.log('Il giocatore 2 ha indovinato');
    } else if ((Math.abs(giocatore1 - numeroCasuale)) < (Math.abs(giocatore2 - numeroCasuale))) {
        console.log('Nessuno dei due giocatori ha indovinato, ma il giocatore 1 si è avvicinato di più');
    } else {
        console.log('Nessuno dei due giocatori ha indovinato, ma il giocatore 2 si è avvicinato di più');
    }