{
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
        }

        {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            const argComputerMove = getMoveName(randomNumber);
            console.log('Komputer wylosował: ' + argComputerMove);

            const argPlayerMove = getMoveName(playerInput);
            console.log('Gracz wybrał: ' + argPlayerMove);

            function displayResult() {
                const a = randomNumber;
                const b = playerInput;
                console.log('Ruch komputera i ruch gracza:', randomNumber, playerInput);

                if (a === b) {
                    return 'Remis :)';
                }
                if ((a + b + b === 5) || (a + b + b === 8)) {
                    return 'Gracz wygrywa!';
                }
                else {
                    return 'Komputer wygrywa!';
                }
            }
            printMessage('Ruch komputera: ' + argComputerMove);
            printMessage('Twój ruch: ' + argPlayerMove);
            printMessage('Wynik: ' + displayResult());
        }
    }

    document.getElementById('play-rock').addEventListener('click', function () {
            playGame(1)
        }
    );
    document.getElementById('play-paper').addEventListener('click', function () {
            playGame(2)
        }
    );
    document.getElementById('play-scissors').addEventListener('click', function () {
            playGame(3)
        }
    );
}