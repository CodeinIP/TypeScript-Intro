// name
type name = string;

// age
type age = number;

// isFetching
type isFetching = boolean;

// array of number
type arrNum = number[];

// array of string
type arrStr = string[];

// tuple
let tuple1: [string, boolean];

// example
let tup = ["punk", true];

// enum
enum Users {
  User,
  SuperUser,
  Admin,
  SuperAdmin,
}

// function with two arguments x and y both numbers
function product(a: number, b: number): number {
  return a * b;
}

// example
let prod1 = product(4, 6);
console.log(prod1);

// function with two argumnet x and y returning ratio
function divide(x: number, y: number): number {
  return x / y;
}
// example
let div1 = divide(10, 3);
console.log(div1);

// function without return statement
function printName(name: string): void {
  console.log(name);
}
printName("Inder");
