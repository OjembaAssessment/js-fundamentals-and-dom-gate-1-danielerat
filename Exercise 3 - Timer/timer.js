const secondButtons = document.querySelector("#myTimer");
const display = document.querySelector("[data-display]");
const reset = document.querySelector("[data-button-reset]");
// const start = document.querySelector("[]");
let stopwatch = 0;

secondButtons.addEventListener("click", (e) => {
  //   Add Second
  if (e.target.matches("[data-time-add]")) {
    addOrRemoveSeconds(true);
  }
  // Remove Second
  if (e.target.matches("[data-time-remove]")) {
    addOrRemoveSeconds(false);
  }
  //Reset  The counter to 0
  if (e.target.matches("[data-button-reset]")) {
    stopwatch = 0;
    updateUi();
  }
});
// Function to add and remove seconds
function addOrRemoveSeconds(state) {
  if (state) {
    stopwatch += 1;
    updateUi();
  } else {
    if (stopwatch > 0) stopwatch -= 1;
    updateUi();
  }
}
// Function to update the ui

function updateUi() {
  display.textContent = `${stopwatch}s`;
}
