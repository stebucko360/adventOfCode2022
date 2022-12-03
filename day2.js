const fs = require("fs");
const day2 = () => {
  const data = fs.readFileSync("./day2Data.txt", "utf-8");
  const array = data.split("\n");
  let score = 0;
  //change below (can set as an arg if you wish):
  const part = "part2";
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    //part 2 : x = lose y = draw z = win
    //rock vs rock
    if (element.substring(0, 1) === "A" && element.substring(2) === "X") {
      if (part === "part1") {
        score += 4;
      } else {
        score += 3;
      }
      //rock vs paper
    } else if (
      element.substring(0, 1) === "A" &&
      element.substring(2) === "Y"
    ) {
      if (part === "part1") {
        score += 8;
      } else {
        score += 4;
      }

      //rock vs scissors
    } else if (
      element.substring(0, 1) === "A" &&
      element.substring(2) === "Z"
    ) {
      if (part === "part1") {
        score += 3;
      } else {
        score += 8;
      }
      //paper vs rock
    } else if (
      element.substring(0, 1) === "B" &&
      element.substring(2) === "X"
    ) {
      score += 1;
      //paper vs paper
    } else if (
      element.substring(0, 1) === "B" &&
      element.substring(2) === "Y"
    ) {
      score += 5;
      //paper vs scissors
    } else if (
      element.substring(0, 1) === "B" &&
      element.substring(2) === "Z"
    ) {
      score += 9;
      //scissors vs rock
    } else if (
      element.substring(0, 1) === "C" &&
      element.substring(2) === "X"
    ) {
      if (part === "part1") {
        score += 7;
      } else {
        score += 2;
      }
      //scissors vs paper
    } else if (
      element.substring(0, 1) === "C" &&
      element.substring(2) === "Y"
    ) {
      if (part === "part1") {
        score += 2;
      } else {
        score += 6;
      }
      //scissors vs scissors
    } else if (
      element.substring(0, 1) === "C" &&
      element.substring(2) === "Z"
    ) {
      if (part === "part1") {
        score += 6;
      } else {
        score += 7;
      }
    }
  }
  console.log(score);
};

day2();
