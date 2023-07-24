const secondButtons = document.querySelector("#myTimer");
const display = document.querySelector("[data-display]");
const reset = document.querySelector("[data-button-reset]");
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
    stopWatchRunning = true;
    secCounter = setInterval(coundDown, 1000);
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
  }
}
