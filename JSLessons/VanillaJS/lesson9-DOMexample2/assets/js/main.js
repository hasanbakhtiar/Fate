const modeBtn = document.querySelector(".mode-btn");
const header = document.querySelector("header");
const ul = document.querySelector("ul");

const darkMode = () => {
  if (header.className == "header-light") {
    header.className = "header-dark";
    ul.className = "link-dark";
  } else {
    header.className = "header-light";
    ul.className = "link-light";
  }
};
modeBtn.addEventListener("click", darkMode);
