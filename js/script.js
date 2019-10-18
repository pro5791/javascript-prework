{
    function playGame(playerInput) {
        // console.log('playerInput: ' + playerInput);

        clearMessages()

        function getMoveName(argMoveId) {
            if (argMoveId == 1) {
                return 'KAMIEN';
            } else if (argMoveId == 2) {
                return 'PAPIER';
            } else if (argMoveId == 3) {
                return 'NOZYCE';
            }
        }

        {
            const randomNumber = Math.floor(Math.random() * 3 + 1);
            const argComputerMove = getMoveName(randomNumber);

                console.log('Komputer wylosował: ' + argComputerMove);

            const argPlayerMove = getMoveName(playerInput);

                console.log('Gracz wybrał: ' + playerInput);

            function displayResult() {
                const a = argComputerMove; // Ruch komputera
                const b = playerInput; // Ruch gracza

                if (a === b) {
                    return 'Remis :)';
                }
                else if (a === 'KAMIEN' && b === 'PAPIER' || a === 'PAPIER' && b === 'NOZYCE' || a === 'NOZYCE' && b === 'KAMIEN') {
                    return 'Gracz wygrywa!';
                }
                else {
                    return 'Komputer wygrywa!';
                }
            }
            printMessage('Ruch komputera: ' + argComputerMove);
            printMessage('Twój ruch: ' + playerInput);
            printMessage('Wynik: ' + displayResult());
        }
    }

    document.getElementById('play-rock').addEventListener('click', function () {
            playGame('KAMIEN')
        }
    );
    document.getElementById('play-paper').addEventListener('click', function () {
            playGame('PAPIER')
        }
    );
    document.getElementById('play-scissors').addEventListener('click', function () {
            playGame('NOZYCE')
        }
    );
}