import { addGameScore, getGameScores } from './gameAPI';
import myScoreBoard from './scoreBoard';

const displayScores = () => {
  const scoreTable = document.getElementById('scoresTable');
  const scoreList = scoreTable.firstChild;
  scoreList.innerHTML = '';
  const allScores = myScoreBoard.records;
  allScores.forEach((record) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const scoreCell = document.createElement('td');
    nameCell.innerHTML = `<h4>${record.user}</h4>`;
    scoreCell.innerHTML = `<h4>${record.score}</h4>`
    row.appendChild(nameCell);
    row.appendChild(scoreCell);
    scoreList.appendChild(row);
  });
}

const addFormSubmission = () => {
  const nameVal = document.getElementById('name').value;
  const scoreVal = document.getElementById('score').value;
  if(nameVal && scoreVal) {
    addGameScore(nameVal, scoreVal)
    .then(() => getGameScores())
    .then(() => displayScores());
  }
};

export { displayScores, addFormSubmission };