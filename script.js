// script.js

// Select relevant elements
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// Timer variables
let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds

// Function to update the timer display
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to start the timer
function startTimer() {
  if (timerInterval) return; // Prevent multiple intervals
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      alert('Time is up! Take a break.');
    }
  }, 1000); // Run every second
}

// Function to pause the timer
function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null; // Allow restart
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null; // Allow restart
  timeLeft = 25 * 60; // Reset to 25 minutes
  updateTimerDisplay();
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize the display
updateTimerDisplay();
