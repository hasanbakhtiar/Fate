"use strict";
// x = 5;
// document.write(x);

let langaz = ["Ana Səhifə", "Haqqimizda", "Məhsullar", "Əlaqə"];
let langen = ["Home", "About", "Products", "Contact" ,];

document.querySelector('.inputAz').addEventListener('change',(e)=>{
    let x = e.target.value;
    langaz.push(x);
})

document.querySelector('.inputEn').addEventListener('change',(e)=>{
    let x = e.target.value;
    langen.push(x);
})


const navLink = document.querySelectorAll(".nav-link"),
  azBtn = document.querySelector(".az"),
  enBtn = document.querySelector(".en");

const azLang = () => {
  for (let x = 0; x <= langaz.length; x++) {
    navLink[x].innerHTML = langaz[x];
  }
};

const enLang = () => {
  for (let x = 0; x <= langen.length; x++) {
    navLink[x].innerHTML = langen[x];
  }
};

azBtn.addEventListener("click", azLang);
enBtn.addEventListener("click", enLang);

// MultiLang end

// Mode Start

const nav = document.querySelector("nav");
const modeBtn = document.querySelector(".mode");

const darkMode = () => {
  nav.attributes[0].value = "navbar navbar-expand-lg navbar-dark bg-dark";
};

const lightMode = () => {
  nav.attributes[0].value = "navbar navbar-expand-lg navbar-light bg-light";
};

modeBtn.addEventListener("click", darkMode);
modeBtn.addEventListener("dblclick", lightMode);

// start slider

const prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  img = document.querySelector(".sliderImg");

const prevAction = () => {
  img.attributes[0].value = "img/img1.jpg";
};

const nextAction = () => {
  img.attributes[0].value = "img/img2.jpg";
};

prev.addEventListener("click", prevAction);
next.addEventListener("click", nextAction);

// let arr = ['table','pen','book'];
// arr.unshift("Hello");
// console.log(arr);




