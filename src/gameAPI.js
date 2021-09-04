import myScoreBoard from './scoreBoard';

const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const scoresBoard = () => {
  fetch(requestURL, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      name: 'Cricket',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

const gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0SnEe00QRycoJQ0WLR02/scores/';

const processingMessage = document.getElementById('processing');
const refreshButton = document.getElementById('refresh');
const submitButton = document.getElementById('submit-score');

export const getGameScores = async () => {
  try {
    await fetch(gameURL, {
      mode: 'cors',
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => myScoreBoard.assignScores(data.result));
  } catch (error) {
    myScoreBoard.assignScores(null);
  }
};

export const addGameScore = async (name, points) => {
  try {
    processingMessage.classList.remove('hidden');
    refreshButton.disabled = true;
    submitButton.disabled = true;
    await fetch(gameURL, {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: name, score: points }),
    }).then((response) => {
      response.json();
    }).then(() => {
      processingMessage.classList.add('hidden');
      refreshButton.disabled = false;
      submitButton.disabled = false;
    });
  } catch (error) {
      console.log('Error: ' + error);
    }
};

export default scoresBoard;