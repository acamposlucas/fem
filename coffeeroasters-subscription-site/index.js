const TOGGLE_NAVIGATION_BUTTON = document.getElementById("toggle-navigation");
const MAIN_NAVIGATION = document.getElementById("main-navigation");

TOGGLE_NAVIGATION_BUTTON.addEventListener("click", () => {
  let isHidden = MAIN_NAVIGATION.classList.toggle("hidden");
  MAIN_NAVIGATION.ariaHidden = isHidden;
});
