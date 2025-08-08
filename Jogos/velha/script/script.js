const board = document.getElementById('board');
const message = document.getElementById('message');
const modeSelect = document.getElementById('mode');
const difficultySelect = document.getElementById('difficulty');

let currentPlayer = 'X';
let cells = Array(9).fill(null);
let gameOver = false;

function createBoard() {
  board.innerHTML = '';
  cells.forEach((_, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = index;
    cell.addEventListener('click', handleClick);
    board.appendChild(cell);
  });
}

function handleClick(e) {
  const index = e.target.dataset.index;

  if (cells[index] || gameOver) return;

  makeMove(index, currentPlayer);

  if (!gameOver && modeSelect.value === 'bot' && currentPlayer === 'O') {
    setTimeout(botMove, 300);
  }
}

function makeMove(index, player) {
  if (cells[index] || gameOver) return;

  cells[index] = player;
  board.children[index].textContent = player;

  if (checkWinner(player)) {
    message.textContent = `Jogador ${player} venceu! 🎉`;
    gameOver = true;
  } else if (cells.every(cell => cell)) {
    message.textContent = 'Empate!';
    gameOver = true;
  } else {
    currentPlayer = player === 'X' ? 'O' : 'X';
    message.textContent = `Vez do jogador ${currentPlayer}`;
  }
}

function checkWinner(player) {
  const winCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return winCombos.some(combo => {
    const [a, b, c] = combo;
    return cells[a] === player && cells[b] === player && cells[c] === player;
  });
}

function resetGame() {
  cells = Array(9).fill(null);
  currentPlayer = 'X';
  gameOver = false;
  message.textContent = `Vez do jogador ${currentPlayer}`;
  createBoard();
}

function botMove() {
  const difficulty = difficultySelect.value;
  let index;

  if (difficulty === 'easy') {
    index = getRandomMove();
  } else if (difficulty === 'medium') {
    index = getMediumMove();
  } else {
    index = getBestMove(); // Minimax
  }

  makeMove(index, 'O');
}

function getRandomMove() {
  const empty = cells.map((v, i) => v === null ? i : null).filter(v => v !== null);
  return empty[Math.floor(Math.random() * empty.length)];
}

function getMediumMove() {
  for (let i = 0; i < 9; i++) {
    if (!cells[i]) {
      cells[i] = 'O';
      if (checkWinner('O')) {
        cells[i] = null;
        return i;
      }
      cells[i] = null;
    }
  }
  for (let i = 0; i < 9; i++) {
    if (!cells[i]) {
      cells[i] = 'X';
      if (checkWinner('X')) {
        cells[i] = null;
        return i;
      }
      cells[i] = null;
    }
  }
  return getRandomMove();
}

function getBestMove() {
  let bestScore = -Infinity;
  let move;

  for (let i = 0; i < 9; i++) {
    if (!cells[i]) {
      cells[i] = 'O';
      let score = minimax(cells, 0, false);
      cells[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  return move;
}

function minimax(boardState, depth, isMaximizing) {
  if (checkWinner('O')) return 10 - depth;
  if (checkWinner('X')) return depth - 10;
  if (boardState.every(cell => cell)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (!boardState[i]) {
        boardState[i] = 'O';
        let score = minimax(boardState, depth + 1, false);
        boardState[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (!boardState[i]) {
        boardState[i] = 'X';
        let score = minimax(boardState, depth + 1, true);
        boardState[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

// Inicia automaticamente ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  resetGame();
});
