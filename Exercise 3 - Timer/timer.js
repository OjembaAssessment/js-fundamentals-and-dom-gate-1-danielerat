const secondButtons = document.querySelector("#myTimer");
const display = document.querySelector("[data-display]");
const addSecond = document.querySelector("[data-time-add]");
const removeSecond = document.querySelector("[data-time-remove]");

const resetButton = document.querySelector("[data-button-reset]");
const startButton = document.querySelector("[data-button-start]");
// const start = document.querySelector("[]");
let stopwatch = 0;
let secCounter = "";
let stopWatchRunning = false;
secondButtons.addEventListener("click", (e) => {
  //   Add Second
  if (e.target.matches("[data-time-add]") && !stopWatchRunning) {
    addOrRemoveSeconds(true);
  }
  // Remove Second
  if (e.target.matches("[data-time-remove]") && !stopWatchRunning) {
    addOrRemoveSeconds(false);
  }
  //Reset  The counter to 0
  if (e.target.matches("[data-button-reset]") && !stopWatchRunning) {
    stopwatch = 0;
    updateUi();
  }
  //Start
  if (e.target.matches("[data-button-start]")) {
    if (!stopWatchRunning) {
      // Stop Watch is not running start the count down and allow uset to stop it
      stopWatchRunning = true;
      secCounter = setInterval(coundDown, 1000);
      startButton.textContent = "Stop";
      disableButtonsUi(true);
    } else {
      // running, allow user to top the timer.
      stopWatchRunning = false;
      clearInterval(secCounter); // Clear the current Interval
      startButton.textContent = "Start";
      disableButtonsUi(false);
    }
  }
});
// Function to add and remove seconds
function addOrRemoveSeconds(state) {
  if (state) {
    stopwatch += 1;
    updateUi();
  } else {
    if (stopwatch > 0) {
      stopwatch -= 1;
      updateUi();
    }
  }
}
// Function to update the ui

function updateUi() {
  display.textContent = `${stopwatch}s`;
}

function coundDown() {
  console.log("down");
  if (stopwatch > 0) {
    addOrRemoveSeconds(false);
  } else {
    clearInterval(secCounter);
    stopWatchRunning = false; // You can run the timer again
    startButton.textContent = "Start";
    disableButtonsUi(false);
  }
}

function disableButtonsUi(state) {
  if (state) {
    addSecond.classList.add("disabled-btn");
    removeSecond.classList.add("disabled-btn");
    resetButton.classList.add("disabled-btn");
  } else {
    addSecond.classList.remove("disabled-btn");
    removeSecond.classList.remove("disabled-btn");
    resetButton.classList.remove("disabled-btn");
  }
}
