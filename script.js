        let chances = 3;
        let userWins = 0;
        let computerWins = 0;

        function UserChoice(playerChoice) {
            const choices = ['rock', 'paper', 'scissors'];
            const computerChoice = choices[Math.floor(Math.random() * 3)];
           
            const result = determineWinner(playerChoice, computerChoice);

            chances--;

            document.getElementById('result').innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}.`;

            updateScores(result);

            if (chances === 0) {
                displayOverallResult();
                resetGame();
            }
        }

        function determineWinner(player, computer) {
            if (player === computer) {
                return "It's a tie!";
            } else if ((player === 'rock' && computer === 'scissors') ||
                       (player === 'paper' && computer === 'rock') ||
                       (player === 'scissors' && computer === 'paper')) {
                userWins++;
                return 'You win!';
            } else {
                computerWins++;
                return 'Computer wins!';
            }
        }

        function updateScores(result) {
            document.getElementById('result').innerText += `\n${result}.\nChances left: ${chances}`;
        }

        function displayOverallResult() {
            document.getElementById('result').innerText += `\noverall result:You ${userWins} - Computer ${computerWins}`;
        }

        function resetGame() {
            chances = 3;
            userWins = 0;
            computerWins = 0;
        }
    