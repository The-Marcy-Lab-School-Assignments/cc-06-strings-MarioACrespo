//write your code here
const reverseString = (str) => {
  let i = str.length - 1;
  let tam = "";
  while (i >= 0) {
    tam += str[i];
    i--;
  }
  return tam;
};
// just  reverse
console.log(reverseString("motts"));

const reverseZigZagString = (str) => {
  let i = str.length - 1;
  let water = "";
  while (i >= 0) {
    if (i % 2 === 0) {
      water += str[i].toUpperCase();
    } else {
      water += str[i];
    }
    i--;
  }
  return water;
};

console.log(reverseZigZagString("bottle"));
