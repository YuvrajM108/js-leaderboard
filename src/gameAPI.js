const fetch = require('node-fetch');

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

export default scoresBoard;