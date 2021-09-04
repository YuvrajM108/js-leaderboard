import { addGameScore, getGameScores } from './gameAPI';
import myScoreBoard from './scoreBoard';

const displayScores = () => {
  const scoreTable = document.getElementById('scoresTable');
  const scoreList = scoreTable.firstChild;
  scoreList.innerHTML = '';
  const allScores = myScoreBoard.records;
  for (let i = 0; i < allScores.length; i += 1) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${allScores[i].user}:</td><td>${allScores[i].score}</td>`;
    if (i % 2 === 1) {
      row.classList.add('even');
    }
    scoreList.appendChild(row);
  }
};

const addFormSubmission = () => {
  const nameVal = document.getElementById('name').value;
  const scoreVal = document.getElementById('score').value;
  if (nameVal && scoreVal) {
    addGameScore(nameVal, scoreVal)
      .then(() => getGameScores())
      .then(() => displayScores());
  }
};

export { displayScores, addFormSubmission };