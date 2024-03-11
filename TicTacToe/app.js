const board_container = document.querySelector(".play-area #board_container");
const winner_text = document.querySelector("#winner");
const reset_button = document.querySelector("button");

const player = "O";
const computer = "X";
let board_full = false;
const play_board = ["", "", "", "", "", "", "", "", ""];

const render_board = () => {
  board_container.innerHTML = "";
  play_board.forEach((e, i) => {
    const block = document.createElement("div");
    block.id = `block_${i}`;
    block.classList.add("block");
    if (e == player || e == computer) {
      block.classList.add("occupied");
    }
    block.textContent = e;
    block.onclick = () => addPlayerMove(i);
    board_container.appendChild(block);
  });
};

const check_board_complete = () => {
  let flag = true;
  play_board.forEach(element => {
    if (element != player && element != computer) {
      flag = false;
    }
  });
  board_full = !flag;
};

const check_winner = () => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (
      play_board[a] &&
      play_board[a] == play_board[b] &&
      play_board[a] == play_board[c]
    ) {
      document.getElementById(`block_${a}`).classList.add("win-line");
      document.getElementById(`block_${b}`).classList.add("win-line");
      document.getElementById(`block_${c}`).classList.add("win-line");
      winner_text.textContent = `Player ${play_board[a]} wins!`;
      return true;
    }
  }
  return false;
};

const addPlayerMove = e => {
  if (!board_full && play_board[e] == "") {
    play_board[e] = player;
    render_board();
    if (check_winner()) {
      return;
    }
    if (!board_full) {
      const move = computerMove();
      play_board[move] = computer;
      render_board();
      if (check_winner()) {
        return;
      }
    }
  }
};

const computerMove = () => {
  const empty_blocks = [];
  for (let i = 0; i < play_board.length; i++) {
    if (play_board[i] == "") {
      empty_blocks.push(i);
    }
  }
  const random_move = Math.floor(Math.random() * empty_blocks.length);
  return empty_blocks[random_move];
};

reset_button.onclick = () => {
  play_board.fill("");
  render_board();
  winner_text.textContent = "";
  board_full = false;
};

render_board();