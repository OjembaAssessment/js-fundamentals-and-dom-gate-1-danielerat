const secondButtons = document.querySelector("#timeButtons");
const display = document.querySelector("[data-display]");
let seconds = 0;

secondButtons.addEventListener("click", (e) => {
  if (e.target.matches("[data-time-add]")) {
    addOrRemoveSeconds(true);
    console.log(seconds);
  }
  if (e.target.matches("[data-time-remove]")) {
    addOrRemoveSeconds(false);
    console.log(seconds);
  }
});
// Function to add and remove seconds
function addOrRemoveSeconds(state) {
  if (state) {
    seconds += 1;
    updateUi();
  } else {
    if (seconds > 0) seconds -= 1;
    updateUi();
  }
}
// Function to update the ui

function updateUi() {
  display.textContent = `${seconds}s`;
}
