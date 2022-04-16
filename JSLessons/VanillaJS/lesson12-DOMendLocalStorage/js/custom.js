// // https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_summary
// const btn = document.querySelector("button");
// const text = document.querySelector("p");

// const newAdd = () => {
//   text.innerHTML = "New";
// };

// btn.accessKey = "a";
// btn.addEventListener("click", newAdd);

// const btn = document.querySelector("button");
// const text = document.querySelector("p");

// btn.addEventListener('click',()=>{
//     text.classList.toggle('unvisible');
// })

// const p = document.querySelector('p');

// const add=(myelemnt)=>{
//     myelemnt.innerText = "Hello"
// }

// const newelemnt=()=>{
//     add(p);

// }

// document.querySelector('.btn').addEventListener('click',newelemnt);

// const input = document.querySelector("input");
// const btn = document.querySelector("button");
// const text = document.querySelector(".addValue");

// input.addEventListener("change", (melumat) => {
//   inputValue = melumat.target.value;
//   btn.addEventListener("click", () => {
//       text.innerHTML = inputValue;
//     });
//     input.value = "";
// });

const nav = document.querySelector("nav");
const btn = document.querySelector(".btn");

const darkLight = () => {
  if (nav.className == "navbar navbar-expand-lg navbar-light bg-light") {
    const dark = "navbar navbar-expand-lg navbar-dark bg-dark";
    nav.className = dark;
    localStorage.setItem("mode", dark);
  } else {
    const light = "navbar navbar-expand-lg navbar-light bg-light";
    nav.className = light;
    localStorage.setItem("mode", light);
  }
};

btn.addEventListener("click", darkLight);
nav.className = localStorage.getItem("mode");

// localStorage.setItem('name',"Qadir");
// localStorage.clear();
// document.querySelector('#text').innerHTML = localStorage.getItem('name');

const newDate = () => {
  document.querySelector(".date").innerHTML = new Date().getSeconds();
  
};

// const a = setInterval(newDate,1000); //1000ms = 1s
//   clearInterval(a);


// const  b = setTimeout(()=>{
//   alert("Hello")
// },5000)
// clearTimeout(b)





