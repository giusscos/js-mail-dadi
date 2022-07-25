// Acquisizione bottone
const playButton = document.querySelector('.btn');

// playButton.addEventListener('click', function() {
//     let randomNumPC = Math.floor(Math.random() * 6).toString();
//     let randomNumPlayer = Math.floor(Math.random() * 6).toString();

//     if (randomNumPC > randomNumPlayer){
//         console.log('Il PC ha vinto!');
//     } else if(randomNumPC === randomNumPlayer) {
//         console.log('Il Player e il PC hanno pareggiato!');
//     } else {
//         console.log('Il Player ha vinto!');
//     }
// });

// OPPURE

playButton.addEventListener('click', function() {
    const randomNumPC = []
    const randomNumPlayer = []
    let countWinPC = 0, countWinPlayer = 0;
    const matches = prompt('Quante volte tirare i dadi?');
    
// Riempimento e Confronto Array
    for (let i = 0; i < matches; i++){
        // Riempimento array
        randomNumPC.push(Math.floor(Math.random() * 6).toString());
        randomNumPlayer.push(Math.floor(Math.random() * 6).toString());
    // Confronto elementi array 
        if (randomNumPC[i] > randomNumPlayer[i]){
            countWinPC++;       
            // console.log(randomNumPC, randomNumPlayer);     
        } else if(randomNumPC[i] === randomNumPlayer[i]) {
            // console.log(randomNumPC, randomNumPlayer);     
        } else {
            countWinPlayer++;
            // console.log(randomNumPC, randomNumPlayer);     
        }
    }
// Controllo vincite
    if(countWinPC > countWinPlayer){
        console.log("il PC ha vinto " + countWinPC + ' A ' + countWinPlayer);
    } else {
        console.log("il Player ha vinto " + countWinPlayer + ' A ' + countWinPC);
    }
});