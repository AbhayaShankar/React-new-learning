// Real Work case in objects
const Abhaya = {
  name: "Abhaya",
  age: "23",
  //   favPerson: "Pallavi",
  address: {
    city: "Dhanbad",
    state: "Jharkhand",
  },
};

const Karuna = {
  name: "Karuna",
  age: "20",
  address: {
    city: "Patna",
    state: "Bihar",
  },
};

function printUser(user) {
  console.log(user);
  console.log(
    `Name of the user is ${user.name} and the Age of the user is ${user.age}`
  );
}

function objDestr({ name, age }) {
  console.log(`My Gf's Name is ${name} and her age is ${age} `);
}

printUser(Abhaya);
objDestr(Karuna);
