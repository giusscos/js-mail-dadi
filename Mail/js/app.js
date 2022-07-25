// Creazione array email
const emailArray = ['giorgio@rossi.com', 'mario@rossi.com', 'luca@rossi.com', 'giovanni@rossi.com',];

// Acquisizione email
const emailNew = prompt('Inserisci la tua email');
let isHere = false;

// ciclo per le varie iterazioni
for (let i = 0; i < emailArray.length; i++){
    if(emailNew === emailArray[i]){
        isHere = true;
        console.log(isHere);
    }
}

// verifica dell'esito 
if(isHere){
    console.log('Email '+ emailNew +' presente nell\'Array');
} else {
    console.log('Email '+ emailNew +' non presente nell\'Array');
}
