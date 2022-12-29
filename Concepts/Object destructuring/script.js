const alphabets = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

// console.log(a);
// console.log(b);
// console.log(remain);
// console.log(e);
// console.log(f);

// const [a, b, , d = "not declared", e = "not declared yet", f] = alphabets;
const [a, b, ...remain] = alphabets;
// ...remain --> this is known as spread operator.

const newArr = [...alphabets, ...numbers];
console.log(newArr);
// understanding spread Operator and how it actually works.
const newArr2 = [numbers.concat(alphabets)];
console.log(newArr2);
// This will also print result similar to what we got previously ffrom spread operator.
// but in this case in case of arrays is applicable but  once we go into objects, spraed opeartorr is much mroe useful.

function sumAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}

const resultArr = sumAndMultiply(2, 3);
console.log(resultArr);

//this will give us array of two --> one for a+b and another for a*b.

// This we can destructure using destructuring concept such like -

const [sum, multiply] = sumAndMultiply(10, 3);
console.log(sum);
console.log(multiply);

// This is just a small use case where we can use destructuring to make our work easier.

const [sum1, multiply1, division1 = "No declared yet"] = sumAndMultiply(10, 30);
console.log(sum1);
console.log(multiply1);
console.log(division1); // we can set default values if the property is not declared.
