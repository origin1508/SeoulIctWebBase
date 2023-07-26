const readline = require("readline");

// 콘솔로 입력값을 받기위한 모듈
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 게임 라운드
let round = 1;
// 30x30 바둑판
const board = new Array(30).fill([]).map(() => {
  const row = new Array(30).fill(" . ");
  return row;
});
// player 백돌, 흑돌
const player = [" ○ ", " ● "];
// 돌을 체크하기 위한 방향 설정
const directions = {
  horizontal: [
    [1, 0],
    [-1, 0],
  ],
  vertical: [
    [0, 1],
    [0, -1],
  ],
  diagonalRightUp: [
    [1, -1],
    [-1, 1],
  ],
  diagonalLeftUp: [
    [-1, -1],
    [1, 1],
  ],
};
// 바둑판을 콘솔에 출력
function printBoard() {
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      process.stdout.write(board[i][j]);
    }
    console.log("");
  }
}

function play() {
  // 5분이 지나면 게임 종료
  setTimeout(() => {
    console.log("5분이 지나 게임을 종료합니다.");
    return rl.close();
  }, 5 * 60 * 1000);

  rl.question(
    `30x30 바둑판에 [${
      player[round % 2]
    }]돌을 놓을 x, y 좌표를 띄어쓰기로 구분하여 한줄로 입력해주세요. \n`,
    (input) => {
      const [x, y] = input.split(" ").map((i) => Number(i) - 1);
      // 숫자가 아닌 값을 받았을 경우 예외처리
      if (isNaN(x) || isNaN(y)) {
        console.log("좌표값은 숫자로 입력해주세요.");
        return play();
      }
      // 좌표값을 넘는 숫자가 입력될 경우 예외처리
      if (x < 0 || x > 29 || y < 0 || y > 29) {
        console.log("좌표값은 1 ~ 30까지의 숫자로 입력해주세요.");
        return play();
      }
      // 이미 돌이 놓여있는 좌표일 경우 예외처리
      if (player.includes(board[y][x])) {
        console.log("이미 돌이 놓여있는 좌표입니다. 다시 입력해주세요.");
        return play();
      }
      checkWin(x, y);
    }
  );

  function checkWin(x, y) {
    const visit = [];
    visit.push([x, y]);
    // 방향별 돌 카운트
    const count = {
      horizontal: 1,
      vertical: 1,
      diagonalRightUp: 1,
      diagonalLeftUp: 1,
    };
    board[y][x] = player[round % 2];
    printBoard();
    checkLine(x, y, "horizontal");
    checkLine(x, y, "vertical");
    checkLine(x, y, "diagonalRightUp");
    checkLine(x, y, "diagonalLeftUp");
    // 카운트 중 5가 존재한다면 게임 승리
    if (Object.values(count).find((value) => value === 5)) {
      console.log(`${player[round % 2]}돌이 승리하였습니다.`);
      return rl.close();
    } else {
      round++;
      return play();
    }
    // 방향별 돌을 체크하기 위한 함수
    function checkLine(x, y, direction) {
      directions[direction].forEach(([i, j]) => {
        const nextX = x + i;
        const nextY = y + j;
        if (
          nextX >= 0 &&
          nextX < 30 &&
          nextY >= 0 &&
          nextY < 30 &&
          board[y][x] === board[nextY][nextX] &&
          !visit.some((value) => {
            return JSON.stringify(value) === JSON.stringify([nextX, nextY]);
          })
        ) {
          count[direction]++;
          visit.push([nextX, nextY]);
          return checkLine(nextX, nextY, direction);
        }
      });
    }
  }
}

printBoard();
play();
