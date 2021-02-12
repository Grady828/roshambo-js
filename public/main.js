// If the players chose the same selection it is a draw
// Call the game a draw
// If player 1 chooses paper
// And player 2 chooses rock
// Player 1 wins
// And player 2 chooses scissors
// Player 2 wins
// If player 1 chose rock
// And player 2 chose scissors
// P1 wins
// And player 2 chose paper
// P2 wins
// If player 1 chose scissors
// And player 2 chose paper
// P1 wins
// And player 2 chose rock
// P2 wins

let Player1Choice = ()
let Player2Choice = ()

function updatePlayer1Choice(){
   const Player1 = document.querySelector('event.player1')

}

function main() {
  const p1RockButton = document
    .querySelector('#p1RockButton')
    .addEventListener('click', player1ChoosesRock)

  const p1PaperButton = document
    .querySelector('#p1PaperButton')
    .addEventListener('click', player1ChoosesPaper)

  const p1ScissorsButton = document
    .querySelector('#p1RockButton')
    .addEventListener('click', player1ChoosesScissors)

  const p2RockButton = document
    .querySelector('#p2RockButton')
    .addEventListener('click', player2ChoosesRock)

  const p2PaperButton = document
    .querySelector('#p2PaperButton')
    .addEventListener('click', player2ChoosesPaper)

  const p2ScissorsButton = document
    .querySelector('#p2ScissorsButton')
    .addEventListener('click', player2ChoosesScissors)
}

document.addEventListener('DOMContentLoaded', main)
