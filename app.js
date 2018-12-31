
const posPre = 'pos_';
var board = {
  state: [0,0,0,0,0,0,0,0,0],
  turn: 'player1',
  marker: 'X',
  status: {
    win:false, winLine:''
  }
}

function placeAt(pos){
    playAt(pos, board);

    if (isWin(board)) {
      declareWinner(board);
      endGame(board);
    }
    else {
      rotateTurn(board);
    }
}

function endGame(board) {
  var elems = document.querySelectorAll('button');
  for(var ii=0; ii<elems.length; ii++) {
    elems[ii].disabled = 'true';
  }
}

function playAt(pos, board) {
  let position = posPre + pos;
  document.getElementById(position).innerHTML = board.marker;
  if (board.turn == 'player1') {
    board.state[pos - 1] = 1;
  }
  else {
    board.state[pos - 1] = 2;
  }
}

function rotateTurn(board) {
  if (board.turn == 'player1') {
    board.turn = 'player2';
    board.marker = 'O';
    document.getElementById('pl1').style.color = 'black';
    document.getElementById('pl2').style.color = 'blue';
  }
  else {
    board.turn = 'player1';
    board.marker = 'X';
    document.getElementById('pl1').style.color = 'blue';
    document.getElementById('pl2').style.color = 'black';
  }
}

function isWin(board) {
  if (board.state[0] == board.state[1] && board.state[1] == board.state[2] && board.state[2] != 0) {
    board.status.winLine = 'row1';
    return board.status.win = true;
  }
  else if (board.state[3] == board.state[4] && board.state[4] == board.state[5] && board.state[5] != 0) {
    board.status.winLine = 'row2';
    return board.status.win = true;
  }
  else if (board.state[6] == board.state[7] && board.state[7] == board.state[8] && board.state[8] != 0) {
    board.status.winLine = 'row3';
    return board.status.win = true;
  }
  else if (board.state[0] == board.state[3] && board.state[3] == board.state[6] && board.state[6] != 0) {
    board.status.winLine = 'col1';
    return board.status.win = true;
  }
  else if (board.state[1] == board.state[4] && board.state[4] == board.state[7] && board.state[7] != 0) {
    board.status.winLine = 'col2';
    return board.status.win = true;
  }
  else if (board.state[2] == board.state[5] && board.state[5] == board.state[8] && board.state[8] != 0) {
    board.status.winLine = 'col3';
    return board.status.win = true;
  }
  else if (board.state[0] == board.state[4] && board.state[4] == board.state[8] && board.state[8] != 0) {
    board.status.winLine = 'diagonal1';
    return board.status.win = true;
  }
  else if (board.state[6] == board.state[4] && board.state[4] == board.state[2] && board.state[2] != 0) {
    board.status.winLine = 'diagonal2';
    return board.status.win = true;
  }
}

function declareWinner(board) {
  if (board.status.win == true) {
    document.getElementById('declare').innerHTML= board.turn + " Won with " + board.status.winLine + "!!";
  }
}
