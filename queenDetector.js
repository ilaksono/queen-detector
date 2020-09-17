const boardEmpty = () => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let temp = [];
    for (let j = 0; j < 10; j++)
      temp.push(0);
    arr[i] = [...temp];
  }
  return arr;
};

const generateBoard = (white, black) => {
  let chessBoard = boardEmpty();
  [chessBoard[white[0]][white[1]], chessBoard[black[0]][black[1]]] = [1, 1];
  return chessBoard;
};

const rowAttack = (board) => {
  for (let a of board) {
    if (a.reduce((a, val) => a + val, 0) === 2)
      return true;
  }
  return false;
};

const colAttack = (board) => horizontalPos(board)[0] === horizontalPos(board)[1];

const horizontalPos = board => {
  let arr = [];
  board.forEach((a) => arr.push(a.indexOf(1)));
  return arr.filter(a => a >= 0);
};

const verticalPos = board => {
  let arr = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i].indexOf(1) >= 0)
      arr.push(i);
  }
  return arr;
};

const diagonalAttack = (board) => Math.abs(horizontalPos(board)[0] - horizontalPos(board)[1]) === Math.abs(verticalPos(board)[1] - verticalPos(board)[0]);

const queenThreat = (board) => colAttack(board) || diagonalAttack(board) || rowAttack(board);


let whiteQueen = [5, 0];
let blackQueen = [0, 5];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
