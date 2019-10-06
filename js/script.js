function playGame(playerInput) {

    clearMessages()

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
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

    /*if(randomNumber == 1) {
        computerMove = 'kamień';
    }    else if(randomNumber == 2) {
        computerMove = 'papier';
    }    else if(randomNumber == 3) {
        computerMove = 'nożyce';
    }
    */

    printMessage('Ruch komputera: ' + argComputerMove);

   / let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); /
    console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);

    /*
    if (playerInput == '1'){
        playerMove = 'kamień';
    }   else if (playerInput == '2'){
        playerMove = 'papier';
    }   else if (playerInput == '3'){
        playerMove = 'nożyce';
    }   else if (playerInput > '3'){
        playerMove = 'nieznany ruch';
    }
    */

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('ruch komputera i gracza:', argComputerMove, argPlayerMove);

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            return 'Ty wygrywasz!';
        }
        if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            return 'Komputer wygrywa!';
        }
        if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            return 'Komputer wygrywa!';
        }
        if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            return 'Ty wygrywasz!';
        }
        if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            return 'Komputer wygrywa!';
        }
        if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            return 'Ty wygrywasz!';
        }
        if (argComputerMove == argPlayerMove) {
            return 'Remis :)';
        }
        if (argPlayerMove == 'nieznany ruch') {
            return 'Inna liczba!? Wybierz liczbę 1: kamień, 2: papier, 3: nożyce';
        }
        /*
            if (computerMove == 'kamień' && playerMove == 'kamień') {
                printMessage('Remis :)');
            } else if (computerMove == 'kamień' && playerMove == 'papier') {
                printMessage('Ty wygrywasz!');
            } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
                printMessage('Komputer wygrywa!');
            } else if (computerMove == 'papier' && playerMove == 'kamień') {
                printMessage('Komputer wygrywa!');
            } else if (computerMove == 'papier' && playerMove == 'papier') {
                printMessage('Remis :)');
            } else if (computerMove == 'papier' && playerMove == 'nożyce') {
                printMessage('Ty wygrywasz!');
            } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
            } else if (computerMove == 'nożyce' && playerMove == 'papier') {
                printMessage('Komputer wygrywa!');
            } else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
                printMessage('Remis :)');
            } else if (computerMove == 'kamień' && playerMove == 'nieznany ruch') {
                printMessage('Inna liczba!? Wybierz liczbę 1: kamień, 2: papier, 3: nożyce');
            } else if (computerMove == 'papier' && playerMove == 'nieznany ruch') {
                printMessage('Inna liczba!? Wybierz liczbę 1: kamień, 2: papier, 3: nożyce');
            } else if (computerMove == 'nożyce' && playerMove == 'nieznany ruch') {
                printMessage('Inna liczba!? Wybierz liczbę 1: kamień, 2: papier, 3: nożyce');
            }
        */
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