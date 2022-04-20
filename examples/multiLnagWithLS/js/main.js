const menuValue = document.querySelectorAll("a");
const menuBtn = document.querySelector(".btn");

let az = ["Ana Səhifə", "Haqqımızda", "Məhsullar", "Məqalə", "Əlaqə"];
let en = ["Home", "About", "Products", "Blog", "Contact"];

const multiLang = () => {
  if (menuBtn.innerHTML == "AZ") {
    for (let x = 0; x < az.length; x++) {
      menuValue[x].innerHTML = az[x];
      localStorage.setItem("multilang", az);
      localStorage.setItem("btn", "EN");

      menuBtn.innerHTML = "EN";
    }
  } else {
    for (let x = 0; x < az.length; x++) {
      menuValue[x].innerHTML = en[x];
      localStorage.setItem("multilang", en);
      localStorage.setItem("btn", "AZ");
      menuBtn.innerHTML = "AZ";
    }
  }
};

for (let x = 0; x < az.length; x++) {
  menuValue[x].innerHTML = localStorage.getItem("multilang").split(",")[x];
}
menuBtn.innerHTML = localStorage.getItem("btn");
menuBtn.addEventListener("click", multiLang);
