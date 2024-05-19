data = [
  {
    id: 1,
    name: "Robbi",
  },
  {
    id: 2,
    name: "Arro",
  },
];

const create = (value) => {
  data.push(value);
  return data;
};

// console.log(
//   create({
//     id: 3,
//     name: "erpin",
//   })
// );

let result;
data.map((value) => {
  if (value.name === "erpin") result = value;
});

// console.log(result);

const min = (value) => {
  return Math.min(...value);
};

// console.log(min([10, 100, 1, -2, -10]));

class math {
  constructor(num1, num2) {}

  perkalian(num1, num2) {
    return num1 * num2;
  }
}

const sum = new math();

const kali = new math();

class bagi extends math {
  constructor() {
    super();
  }

  pembagian(num1, num2) {
    return num1 / num2;
  }
}

const pembagi = new bagi();

console.log(pembagi.perkalian(9, 9));
