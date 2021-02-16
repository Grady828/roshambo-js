let Player1Choice = ''
let Player2Choice = ''

function player1ChoosesRock() {
  Player1Choice = 'rock'
  console.log(Player1Choice)
  whoWins()
}
function player1ChoosesScissors() {
  Player1Choice = 'scissors'
  console.log(Player1Choice)
  whoWins()
}
function player1ChoosesPaper() {
  Player1Choice = 'paper'
  console.log(Player1Choice)
  whoWins()
}
function player2ChoosesRock() {
  Player2Choice = 'rock'
  console.log(Player2Choice)
  whoWins()
}
function player2ChoosesPaper() {
  Player2Choice = 'paper'
  console.log(Player2Choice)
  whoWins()
}
function player2ChoosesScissors() {
  Player2Choice = 'scissors'
  console.log(Player2Choice)
  whoWins()
}
function player1ChoosesLizard() {
  Player1Choice = 'lizard'
  console.log(Player1Choice)
  whoWins()
}
function player1ChoosesSpock() {
  Player1Choice = 'spock'
  console.log(Player1Choice)
  whoWins()
}
function player2ChoosesLizard() {
  Player2Choice = 'lizard'
  console.log(Player2Choice)
  whoWins()
}
function player2ChoosesSpock() {
  Player2Choice = 'spock'
  console.log(Player2Choice)
  whoWins()
}

let whoWins = function () {
  if (Player1Choice === '' || Player2Choice === '') return
  if (Player1Choice === Player2Choice) {
    window.alert('This is a Draw')
    location.reload()
  }

  if (Player1Choice === 'paper') {
    if (Player2Choice === 'rock') {
      window.alert('Player 1 Wins!')
      location.reload()
    } else if (Player2Choice === 'scissors') {
      window.alert('Player 2 Wins')
      location.reload()
    } else if (Player2Choice === 'lizard') {
      window.alert('Player 2 Wins')
      location.reload()
    } else if (Player2Choice === 'spock') {
      window.alert('Player 1 Wins')
      location.reload()
    }
  }

  if (Player1Choice === 'rock') {
    if (Player2Choice === 'scissors') {
      window.alert('Player 1 Wins!')
      location.reload()
    } else if (Player2Choice === 'paper') {
      window.alert('Player 2 Wins')
      location.reload()
    } else if (Player2Choice === 'lizard') {
      window.alert('Player 1 Wins')
      location.reload()
    } else if (Player2Choice === 'spock') {
      window.alert('Player 2 Wins')
      location.reload()
    }
  }

  if (Player1Choice === 'scissors') {
    if (Player2Choice === 'paper') {
      window.alert('Player 1 Wins!')
      location.reload()
    } else if (Player2Choice === 'rock') {
      window.alert('Player 2 Wins')
      location.reload()
    } else if (Player2Choice === 'lizard') {
      window.alert('Player 1 Wins')
      location.reload()
    } else if (Player2Choice === 'spock') {
      window.alert('Player 2 Wins')
      location.reload()
    }
  }

  if (Player1Choice === 'lizard') {
    if (Player2Choice === 'paper') {
      window.alert('Player 1 Wins!')
      location.reload()
    } else if (Player2Choice === 'rock') {
      window.alert('Player 2 Wins')
      location.reload()
    } else if (Player2Choice === 'scissors') {
      window.alert('Player 2 Wins')
      location.reload()
    } else if (Player2Choice === 'spock') {
      window.alert('Player 1 Wins')
      location.reload()
    }
  }

  if (Player1Choice === 'spock') {
    if (Player2Choice === 'paper') {
      window.alert('Player 2 Wins!')
      location.reload()
    } else if (Player2Choice === 'rock') {
      window.alert('Player 1 Wins')
      location.reload()
    } else if (Player2Choice === 'lizard') {
      window.alert('Player 2 Wins')
      location.reload()
    } else if (Player2Choice === 'scissors') {
      window.alert('Player 1 Wins')
      location.reload()
    }
  }
}

// If player 1 chooses paper
// And player 2 chooses rock
// Player 1 wins
// if (Player1Choice === 'paper' && Player2Choice === 'rock')
//   return 'Player 1 wins!'
//

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

  const p1LizardButton = document
    .getElementById('p1LizardButton')
    .addEventListener('click', player1ChoosesLizard)

  const p1SpockButton = document
    .getElementById('p1SpockButton')
    .addEventListener('click', player1ChoosesSpock)

  const p2LizardButton = document
    .getElementById('p2LizardButton')
    .addEventListener('click', player2ChoosesLizard)

  const p2SpockButton = document
    .getElementById('p2SpockButton')
    .addEventListener('click', player2ChoosesSpock)
  // If the players chose the same selection it is a draw
  // Call the game a draw
}
console.log(whoWins(Player1Choice, Player2Choice))

document.addEventListener('DOMContentLoaded', main)
