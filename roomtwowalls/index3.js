//import {weblogic} from "../custom_file_choice.js";
import { globalLogic } from "../index.js";
const twoWalls = function (path, numWalls) {
  return (function () {
    globalLogic(path, numWalls);
  })();
};
const container = document.querySelector(".container"); 

const w1 = document.querySelector(".wall_1");
const w2 = document.querySelector(".wall_2");
const angle = document.querySelector("#range");
const pValue = document.querySelector(".value");
let valAngle = 0+"&deg";
pValue.innerHTML = valAngle;
angle.oninput = (e) => {
  valAngle = angle.value * 2;
  w1.style.transform = `skewY(${-angle.value}deg)`;
  w2.style.transform = `skewY(${angle.value}deg)`;
  pValue.innerHTML = valAngle + "&deg";
};
twoWalls("../", 1);


