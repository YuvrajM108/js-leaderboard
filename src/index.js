import { getGameScores } from './gameAPI'
import { addFormSubmission, displayScores } from './DOMmanipulation';
import './style.css';

const processingMessage = document.getElementById('processing');
const refreshButton = document.getElementById('refresh');
const submitButton = document.getElementById('submit-score');

document.addEventListener('DOMContentLoaded', () => {
  getGameScores()
  .then(() => {
    displayScores();
  });
});
  
const addScoreBtn = document.getElementById('submit-score');
addScoreBtn.addEventListener('click', () => {
  addFormSubmission();
});
  
const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  getGameScores()
  .then(() => {
    displayScores();
  });
});