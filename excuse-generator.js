"use strict";

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];

function generateExcuse() {
  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
  return `${random(who)} ${random(action)} ${random(what)} ${random(when)}.`;
}

if (require.main === module) {
  console.log(generateExcuse());
}

module.exports = { generateExcuse };
