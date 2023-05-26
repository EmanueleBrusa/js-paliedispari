//prompt per la scelta di pari o dispari 

let choice = prompt('Sfida il computer scegliendo pari o dispari!').toLocaleLowerCase();

//ciclo di controllo

while (!(choice == "pari" || choice == "dispari")){
    choice = prompt("Non hai inserito né pari, né dispari! Ritenta, per favore!");
};

//prompt per la scelta di un numero da 1 a 5 

let number = parseInt(prompt('Ottima scelta! Ora scegli un numero da 1 a 5, prego!'));

while (isNaN(number) || (number < 1 || number > 5)){
    number = parseInt(prompt("Non hai inserito un valore corretto o un numero compreso tra 1 e 5. Ritenta, per favore!"));
}

//funzione per la generazione del numero del computer

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Utilizzo della funzione per generare il numero del computer compreso tra 1 e 5

let computerNumber = generateRandomNumber(1, 5);

// Calcolo della somma dei numeri scelti dall'utente e dal computer

let sum = number + computerNumber;

//controllo che il numero generato sia pari o dispari

function PariDispari(sum) {
  if (sum % 2 === 0) 
    {
      return "pari";
    } else 
      {
        return "dispari";
      }
}

//mostro i risultati

console.log("Hai scelto: " + choice);
console.log("Il tuo numero: " + number);
console.log("Numero del computer: " + computerNumber);
console.log("La somma è: " + sum);

// Determina se la somma è pari o dispari e mostra il risultato

if (choice === PariDispari(sum)) {
    console.log('Hai vinto.');
} else 
    {
        console.log('Hai perso.');
    }