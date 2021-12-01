var fs = require('fs');

var input = fs.readFileSync('data.txt', 'utf8').split('\n');

console.log(input,"input");
const calculateNumberOfIncrease = (input) => {
  let count = 0;
  for (let i = 1; i<input.length; i++) {
    if(parseInt(input[i]) > parseInt(input[i - 1])){
      count++;
    }
  }
  console.log(count,"count");
  return count;
}
console.log("hey")

const result = calculateNumberOfIncrease(input);
console.log(result,"result")
