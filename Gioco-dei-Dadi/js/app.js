// Acquisizione bottone
const playButton = document.querySelector('.btn');

playButton.addEventListener('click', function() {
    let randomNumPC = Math.floor(Math.random() * 6) + 1;
    let randomNumPlayer = Math.floor(Math.random() * 6) + 1;

    if (randomNumPC > randomNumPlayer){
        console.log('Il PC ha vinto con: ' + randomNumPC + ' vs ' + randomNumPlayer + ';');
    } else if(randomNumPC === randomNumPlayer) {
        console.log('Il Player e il PC hanno pareggiato con: ' + randomNumPC + ' vs ' + randomNumPlayer + ';');
    } else {
        console.log('Il Player ha vinto con ' + randomNumPlayer + ' vs ' + randomNumPC + ';');
    }
});