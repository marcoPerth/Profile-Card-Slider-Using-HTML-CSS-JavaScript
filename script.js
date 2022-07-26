let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let slider = document.querySelector(".slider");

btn1.onclick = function () {
  slider.style.marginLeft = "0px";
  this.style.background = "aliceblue";
  btn2.style.background = "transparent";
  btn3.style.background = "transparent";
};
btn2.onclick = function () {
  slider.style.marginLeft = "-220px";
  this.style.background = "aliceblue";
  btn3.style.background = "transparent";
  btn1.style.background = "transparent";
};
btn3.onclick = function () {
  slider.style.marginLeft = "-440px";
  this.style.background = "aliceblue";
  btn1.style.background = "transparent";
  btn2.style.background = "transparent";
};
