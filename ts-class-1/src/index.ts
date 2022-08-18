// Booleans
//   variable: type = value
let isFinished: boolean = false;
isFinished = true;

// Numbers
let amount: number = 100;

// Strings
let first_name: string = "masai";
let last_name: string = "school";
let full_name = `${first_name} ${last_name} ${amount}`; // Inference check from the value
// template literal is a string so we can pass anything number string etc inside full name

// Arrays
let arr1: number[] = [1, 2, 3]; // it store array of numbers number[](array)
let arr2: string[] = ["Masai", "School"];
let arr3: Array<number> = [2, 32, 3];
//
// Objects
//
// Inteface => describe the shape of object
// interface is limited to objects only
//
// interface person {
//   name: string;
//   age: number;
// }
//
//
//
// Type Alias
// Type can be used also for primitives number,string,boolean,null,undefined,symbol, big-int

type person = {
  name: string;
  age: number;
  workingDays?: number;
};
type address = string;

type softwareEngineer = {
  skill?: string;
};
let add: address = "Masai";

let obj1: person = {
  name: "Punk",
  age: 24,
};

// Array of objects
let arrPerson: person[] = [
  { name: "inder", age: 2 },
  { name: "r", age: 6 },
];
// let arrPerson:person[] = []  // cannot re-declare
// arrPerson = [];

// Tuples -> Arrays
// The types of elements are known in advance and thier order is fixed

// let a:string = "Masai"
// let b:string = "School";

let tuple: [string, string, number?];
tuple = ["masai", "school"];
// console.log(tuple[1]);

//

let tuple1: [string, number, string];
tuple1 = ["masai", 3, "school"];
// console.log(tuple[1]);
//
//
// Enums -> A group of named contants
// e.g. const GET_DATA_REQUEST = "GET_DATA_REQUEST";
//
enum Color {
  RED = "RED", // 0
  GREEN = "GREEN", // 1
  BLUE = "BLUE", // 2
}
// console.log(Color);
enum color {
  RED,
  GREEN,
  BLUE,
}
// console.log(color[0], color["RED"]); // CAN access by both index of string
//
// Other types
let u: undefined;
let n: null;
let a: any;
// any can take any value
a = "masai";
a = 3;
a = true;
a = null;
// a = undefined;
//
// console.log(a);
//
// FUNCTIONS
function sum(a: number, b: number) {
  return a + b;
}
// console.log(sum(2,2));
// console.log(sum("2","2"));

function summ(a: number = 2, b: number = 5): number {
  return a + b;
}
// console.log(summ(3));  // can also pass 1 argument as we have default params as well
//
// (a:number,b:number):number <= this number verify that output should be a number
function func(a: number, b: string): string {
  return a + b;
}
// (a:number,b:string):string <= this number verify that output should be a string
//
// void keyword if function is not returning anything

const printPerson = ({ name, age }: person): void => {
  console.log(`${name} ${age}`);
};
printPerson(obj1);
//
// Union
//  A U B -> combinig multiple types together
let output: (number | string)[];
output = ["Masai", 3, 3, "ram", "lakhan", 121];
//
// Interaction
//
let masaiStudent: person & softwareEngineer = {
  age: 20,
  name: "Masai",
  //   skill: "Coding", // due to optional chaining I have choice  to pass or not-pass argument
};
//
// ==========   API  json
type responseObject = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
let response: responseObject[];
// 
// 
// axios("URL").then((r)=>{
//     r.data.forEach((item:responseObject)=>{
//         let length = item.name.length;
//     })
// })
function check(...args){
    console.log(typeof args);
}
check(100);
tuple.push("10");
console.log(tuple);
(function(a){
    return(function(){
        console.log(a);
        a=101;
    })();
})(100);
