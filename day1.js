const fs = require("fs");
const day1 = async () => {
  const data = fs.readFileSync("./day1Data.txt", "utf-8");
  const array = data.split("\n");

  const splitArray = [];
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element !== "") {
      tempArray.push(element);
    } else {
      splitArray.push(tempArray);
      tempArray = [];
    }
  }

  const result = splitArray.map((element) =>
    element.reduce((a, b) => parseInt(a) + parseInt(b), 0)
  );
  //answer to part 1:
  // console.log(Math.max(...result));
  //answer to part 2:
  const decendingSort = result.sort((a, b) => a - b).reverse();
  console.log(decendingSort[0] + decendingSort[1] + decendingSort[2]);
};

day1();
