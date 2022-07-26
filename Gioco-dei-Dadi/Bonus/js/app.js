// Acquisizione bottone
const playButton = document.querySelector('.btn');
const containerResult = document.querySelector('.container > .result_wrapper');

playButton.addEventListener('click', function() {
    const randomNumPC = []
    const randomNumPlayer = []
    let countWinPC = 0, countWinPlayer = 0;
    const matches = prompt('Quante volte tirare i dadi?');
    
// Riempimento e Confronto Array
    for (let i = 0; i < matches; i++){
        // Riempimento array
        randomNumPC.push(Math.floor(Math.random() * 6) + 1);
        randomNumPlayer.push(Math.floor(Math.random() * 6) + 1);
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
        console.log("il PC ha vinto con: " + countWinPC + ' VS ' + countWinPlayer);
    } else if (countWinPC === countWinPlayer){
        console.log("il PC e il Player hanno pareggiato con: " + countWinPC + ' VS ' + countWinPlayer);
    } 
    else {
        console.log("il Player ha vinto con: " + countWinPlayer + ' VS ' + countWinPC);
    }
    containerResult.innerHTML = 
        `<div class="col result">
            <div class="pc">
                ${countWinPC}
            </div>
            <div class="vs">
                -
            </div>
            <div class="player">
                ${countWinPlayer}
            </div>
        </div>`;
});