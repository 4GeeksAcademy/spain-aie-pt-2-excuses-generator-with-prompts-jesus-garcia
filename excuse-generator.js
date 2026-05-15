"use strict";

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];

function generateExcuse() {
  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
  return `${random(who)} ${random(action)} ${random(what)} ${random(when)}.`;
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generate-btn");
  const excuseText = document.getElementById("excuse-text");

  if (!button || !excuseText) return;

  const renderExcuse = () => {
    excuseText.textContent = generateExcuse();
  };

  button.addEventListener("click", renderExcuse);
});
