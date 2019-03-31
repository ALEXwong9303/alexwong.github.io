let turn = 0
let currentPlayer

const board = document.getElementById('board')
const boxes = document.getElementsByClassName('box')
const restartBtn = document.getElementById('restart')

function checkWin() {
    if (boxes[0].innerHTML == currentPlayer && boxes[1].innerHTML == currentPlayer && boxes[2].innerHTML == currentPlayer) {
        alert('you win!')
    }
    if (boxes[3].innerHTML == currentPlayer && boxes[4].innerHTML == currentPlayer && boxes[5].innerHTML == currentPlayer) {
        alert('you win!')
    }
    if (boxes[6].innerHTML == currentPlayer && boxes[7].innerHTML == currentPlayer && boxes[8].innerHTML == currentPlayer) {
        alert('you win!')
    }
    if (boxes[1].innerHTML == currentPlayer && boxes[4].innerHTML == currentPlayer && boxes[7].innerHTML == currentPlayer) {
        alert('you win!')
    }
    if (boxes[2].innerHTML == currentPlayer && boxes[5].innerHTML == currentPlayer && boxes[8].innerHTML == currentPlayer) {
        alert('you win!')
    }
    if (boxes[0].innerHTML == currentPlayer && boxes[4].innerHTML == currentPlayer && boxes[8].innerHTML == currentPlayer) {
        alert('you win!')
    }
    if (boxes[2].innerHTML == currentPlayer && boxes[4].innerHTML == currentPlayer && boxes[6].innerHTML == currentPlayer) {
        alert('you win!')
    }
    if (boxes[0].innerHTML == currentPlayer && boxes[3].innerHTML == currentPlayer && boxes[6].innerHTML == currentPlayer) {
        alert('you win!')
    }
}

board.addEventListener('click', function(event) {
    
    if (turn % 2 == 0) {
        currentPlayer = 'X'
    } else {
        currentPlayer = 'O'
    }

    if (event.target.innerHTML == '') {
      event.target.innerHTML = currentPlayer
      turn++
      checkWin()
    }
})

restartBtn.addEventListener('click', function() {
  alert('restarting the game!')
  window.location.reload()
})

