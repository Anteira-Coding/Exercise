const cells = document.querySelectorAll('.cell');
const board = [];
let curPlayer = 'X';

for (let i = 0; i < cells.length; i++) {
    board.push(null);
    cells[i].addEventListener('click', () => {
        if (board[i] === null) {
            board[i] = curPlayer;
            cells[i].textContent = curPlayer;
            cells[i].classList.add(curPlayer);
            curPlayer = curPlayer === 'X' ? 'O' : 'X';
            const winner = checkWinner();
            if (winner) {
                cells[i].classList.add('winner');
            }
        }
    });
}

function checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const line of lines) {
      const [a, b, c] = line.map((index) => board[index]);
  
      if (a && a === b && b === c) {
        line.forEach((index) => {
          const cell = document.getElementById(`cell_${index}`);
          cell.classList.add('winner');
        });
  
        return true;
      }
    }
  
    return false;
  }
    for (const line of lines) {
        if (board[line[0]] && board[line[0]] === board[line[1]] && board[line[1]] === board[line[2]]) {
            let cellIds = line.map(index => `#cell_${index}`);
            cells[line[0]].classList.add('winner');
            cells[line[1]].classList.add('winner');
            cells[line[2]].classList.add('winner');

            return true;
        }
    }

    return false;
