// The real power of destructuring comes when it goes to Objects. So lets take up an example and study how destructuring can help us in Objects :

const person1 = {
  name: "Abhaya",
  age: "23",
  //   favPerson: "Pallavi",
  address: {
    city: "Dhanbad",
    state: "Jharkhand",
  },
};

const person2 = {
  name: "Karuna",
  age: "21",
  address: {
    city: "Patna",
    state: "Bihar",
  },
};

const person3 = {
  age: "21",
  favSport: "Cricket",
};

// const { name, age, favPerson = "Karuna", ...rest } = person1;
const {
  name,
  age,
  favPerson = "Karuna",
  address: { city },
} = person1;

console.log(name);
console.log(age);
console.log(favPerson);
console.log(city);
// console.log(rest);

const concatArr = { ...person1, ...person3 }; // what spread operator does in this case is
// it will add the first object and it will add the 2nd object but it will overwrite the
//values already present inside object 1.
console.log(concatArr);
