// Chiediamo di inserire la parola

let parolaUtente = prompt("Inserire una parola da esaminare:");

// Creiamo la funzione per esaminare la parola

function isPalindrome(parola){
    // rimuovi eventuali spazi bianchi e convertiamo le maiuscole
    parola = parola.trim().toLowerCase();

    // inverti la parola 
    let parolaInvertita = parola.split('').reverse('').join('');

    // verifica che sia uguale a quella inserita
    if (parola === parolaInvertita) {
        return true; //la parola risulta essere palindroma
    }
    else{

        return false; //non risulta essere palindroma
    }
}

//verifichiamo che la parola sia palindroma
if (isPalindrome(parolaUtente)) {
    console.log("Congratulazioni, la parola inserita risulta essere palindroma!")
}
else {
    console.log("Spiacente, la parola inserita non risulta essere palindroma")
}