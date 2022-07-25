const containerResult = document.querySelector('.container');

// dichiaro l'array
const fullArray = [10, 22, 43, 21, 18, 223, 55];
const tailArray = [];

// numero di iterazioni

if(fullArray.length >= 5){
    
    // Riempo con gli utlimi 5 elementi
    for (let i = (fullArray.length - 1); i > (fullArray.length - 6); i--){
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