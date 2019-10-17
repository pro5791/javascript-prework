function playGame(playerInput) {

    clearMessages()

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2)  {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    printMessage('Ruch komputera: ' + argComputerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);


    function displayResult() {
        const a = randomNumber;
        const b = playerInput;
        console.log('ruch komputera i gracza:', randomNumber, playerInput);

        if (a === b) {
            return 'Remis :)';
        }
        if (a + b + b === 5) {
            return 'Ty wygrywasz!';
        }
        if (a + b + b === 8) {
            return 'Ty wygrywasz!';
        }
        else {
            return 'Komputer wygrywa!';
        }
    }

printMessage('Wynik: ' + displayResult(argComputerMove, argPlayerMove));

}

document.getElementById('play-rock').addEventListener('click', function(){
playGame(1)}
);
document.getElementById('play-paper').addEventListener('click', function(){
playGame(2)}
);
document.getElementById('play-scissors').addEventListener('click', function(){
playGame(3)}
);