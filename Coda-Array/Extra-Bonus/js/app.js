 const containerResult = document.querySelector('.container');

// dichiaro l'array
 const fullArray = [];
 const tailArray = [];
 const matches = parseInt(prompt('Inserire grandezza array:'));

 if(matches >= 5){
    // Riempimento con numeri casuale array 
    for (let i = 0; i < matches; i++){
        fullArray[i] = Math.floor(Math.random() * 100);
    } 

    // Riempo con gli utlimi 5 elementi
    for (let i = (matches - 1); i > (matches - 6); i--){
        tailArray[i] = fullArray[i];
    } 
    
    // stampo a schermo
    containerResult.innerHTML = 
    `<div class="result">
        <div class="full_array">
            Array Completo > ${fullArray}
        </div>
        <div class="five_num_array">
            Array Coda > ${tailArray}
        </div>
    </div>`;
} else{
    console.log('Non ci sono numeri sufficienti');    
    containerResult.innerHTML = 
    `<div class="result">
        Non ci sono abbastanza elementi! Prova con almeno 5
    </div>`;
}