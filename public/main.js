let Player1Choice = ''
let Player2Choice = ''

function player1ChoosesRock() {
  Player1Choice = 'rock'
  console.log(Player1Choice)
}
function player1ChoosesScissors() {
  Player1Choice = 'scissors'
  console.log(Player1Choice)
}
function player1ChoosesPaper() {
  Player1Choice = 'paper'
  console.log(Player1Choice)
}
function player2ChoosesRock() {
  Player1Choice = 'rock'
  console.log(Player1Choice)
}
function player2ChoosesPaper() {
  Player1Choice = 'paper'
  console.log(Player1Choice)
}
function player2ChoosesScissors() {
  Player1Choice = 'scissors'
  console.log(Player1Choice)
}

function main() {
  const p1RockButton = document
    .getElementById('p1RockButton')
    .addEventListener('click', player1ChoosesRock)

  const p1PaperButton = document
    .getElementById('p1PaperButton')
    .addEventListener('click', player1ChoosesPaper)

  const p1ScissorsButton = document
    .getElementById('p1ScissorsButton')
    .addEventListener('click', player1ChoosesScissors)

  const p2RockButton = document
    .getElementById('p2RockButton')
    .addEventListener('click', player2ChoosesRock)

  const p2PaperButton = document
    .getElementById('p2PaperButton')
    .addEventListener('click', player2ChoosesPaper)

  const p2ScissorsButton = document
    .getElementById('p2ScissorsButton')
    .addEventListener('click', player2ChoosesScissors)
  // If the players chose the same selection it is a draw
  // Call the game a draw
  function whowins() {
    if (Player1Choice === Player2Choice) {
      // window.alert('Draw!')
      return alert('This result is a tie')
      // console.log('draw--')
    }

    // If player 1 chooses paper
    // And player 2 chooses rock
    // Player 1 wins
    if (Player1Choice === 'paper' && Player2Choice === 'rock')
      window.alert('Player 1 Wins')

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
  }
}

document.addEventListener('DOMContentLoaded', main)
