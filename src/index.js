import myScoreBoard from './scoreBoard';
import { addFormSubmission } from './DOMmanipulation';
import './style.css';

const gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DcQXhgrrBfecZM5hD6Av/scores/';

export const getGameScores = async () => {
    try {
      await fetch(gameURL, {
        mode: 'cors',
        method: 'GET'
      })
      .then((response) => response.json())
      .then((data) => myScoreBoard.assignScores(data.result));
    } catch(error) {
      myScoreBoard.assignScores(null);
    }
};

export const addGameScore = async (name, points) => {
  try {
    await fetch(gameURL, {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"user": name, "score": points }),
    }).then((response) => {
      console.log(response.json());
    });
  } catch(error) {
    console.log(error);
  }
};
