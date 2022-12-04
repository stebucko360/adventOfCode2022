const fs = require("fs");

const day4 = () => {
  const data = fs.readFileSync("./day4Data.txt", "utf-8");
  const array = data.split("\n");
  let split = [];
  let crossOver = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const firstSplit = element.split(",");
    const secondSplit = firstSplit.map((value) => {
      return value.split("-");
    });
    split.push(secondSplit);
  }
  for (let i = 0; i < split.length; i++) {
    const elfPair = split[i];
    const firstElf = elfPair[0];
    const secondElf = elfPair[1];
    //part1
    // if (
    //   parseInt(firstElf[0]) <= parseInt(secondElf[0]) &&
    //   parseInt(firstElf[1]) >= parseInt(secondElf[1])
    // ) {
    //   crossOver++;
    // } else if (
    //   parseInt(firstElf[0]) >= parseInt(secondElf[0]) &&
    //   parseInt(firstElf[1]) <= parseInt(secondElf[1])
    // ) {
    //   crossOver++;
    // }
    //part 2
    if (
      parseInt(firstElf[0]) <= parseInt(secondElf[0]) &&
      parseInt(firstElf[1]) >= parseInt(secondElf[0])
    ) {
      crossOver++;
    } else if (
      parseInt(secondElf[0]) <= parseInt(firstElf[0]) &&
      parseInt(secondElf[1]) >= parseInt(firstElf[0])
    ) {
      crossOver++;
    }
  }
  console.log(crossOver);
};

day4();
