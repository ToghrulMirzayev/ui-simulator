const toggleTheme = document.querySelector("#toggle-theme");
const body = document.body;
const localStorageKey = "theme";

const currentTheme = localStorage.getItem(localStorageKey);

if (currentTheme) {
  body.classList.add(currentTheme);
  toggleTheme.checked = currentTheme === "night-mode";
}

toggleTheme.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("night-mode");
    localStorage.setItem(localStorageKey, "night-mode");
  } else {
    body.classList.remove("night-mode");
    localStorage.setItem(localStorageKey, "day-mode");
  }
});
