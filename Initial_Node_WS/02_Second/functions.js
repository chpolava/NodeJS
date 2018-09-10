const functions = {
    add: (num1, num2) => num1+num2
}
// console.log(functions.add(2,2));
module.exports = functions;

let arr = [123, 234, 345];
let newarr = [678, ...arr];

console.log(arr, newarr);