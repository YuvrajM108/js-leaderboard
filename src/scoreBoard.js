class ScoreBoard {
  constructor() {
    this.records = [];
  }

  addScore(name, points) {
    this.records.push({ name, points });
  }

  assignScores(scoresArr) {
    this.records = scoresArr;
  }
}

const myScoreBoard = new ScoreBoard();

export default myScoreBoard;