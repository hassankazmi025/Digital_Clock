const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

const randonColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalID = null;
const startChangingColor = function () {
    if (!intervalID){

        intervalID = setInterval(changeBG, 1000);
    }
};
const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};
const changeBG = function () {
  document.body.style.backgroundColor = randonColor();
};
startBtn.addEventListener("click", startChangingColor);
stopBtn.addEventListener("click", stopChangingColor);
