import { bottom } from "@popperjs/core";
import "./style.css";
window.onload = () => {
  let topcorner = document.querySelector(".top-corner");
  let bottomcorner = document.querySelector(".bottom-corner");
  let cardnumber = document.querySelector(".card-number");

  const selectedpinta = RandomPintaGenerator();

  topcorner.classList.add(selectedpinta);
  bottomcorner.classList.add(selectedpinta);
  cardnumber.innerHTML = RandomNumberGenerator();
};
let RandomNumberGenerator = () => {
  const possiblenumberpicks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const numbertopick = Math.floor(Math.random() * possiblenumberpicks.length);
  return possiblenumberpicks[numbertopick];
};

let RandomPintaGenerator = () => {
  const pinta = ["heart", "diamond", "club", "spade"];
  const pintatopick = Math.floor(Math.random() * pinta.length);
  return pinta[pintatopick];
};
