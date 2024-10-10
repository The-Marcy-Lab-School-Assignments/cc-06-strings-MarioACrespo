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
  let spc = i;
  while (i >= 0) {
    if (str[i] === " ") {
      water += str[i];
    } else if (spc % 2 === 0) {
      water += str[i].toUpperCase();
      spc++;
    } else {
      water += str[i].toLowerCase();
      spc++;
    }
    i--;
  }
  return water;
};

console.log(reverseZigZagString("bottle"));

console.log(reverseZigZagString("Code Challenge "));

//"eGnElLaHc EdOc"
