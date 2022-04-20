let a;
document.querySelector(".open").addEventListener("click", () => {
  // document.querySelector('p').innerHTML = window.innerHeight;

  a = window.open("index1.htm", "", "width=500, height=500");
  // a.document.write("hello")
});

document.querySelector(".window").addEventListener("click", () => {
  a.resizeTo(200, 200);
});
