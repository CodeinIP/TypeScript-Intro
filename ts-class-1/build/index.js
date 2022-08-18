// Booleans
//   variable: type = value
var isFinished = false;
isFinished = true;
// Numbers
var amount = 100;
// Strings
var first_name = "masai";
var last_name = "school";
var full_name = "".concat(first_name, " ").concat(last_name, " ").concat(amount); // Inference check from the value
// template literal is a string so we can pass anything number string etc inside full name
// Arrays
var arr1 = [1, 2, 3]; // it store array of numbers number[](array)
var arr2 = ["Masai", "School"];
var arr3 = [2, 32, 3];
var add = "Masai";
var obj1 = {
    name: "Punk",
    age: 24
};
// Array of objects
var arrPerson = [
    { name: "inder", age: 2 },
    { name: "r", age: 6 },
];
// let arrPerson:person[] = []  // cannot re-declare
// arrPerson = [];
// Tuples -> Arrays
// The types of elements are known in advance and thier order is fixed
// let a:string = "Masai"
// let b:string = "School";
var tuple;
tuple = ["masai", "school"];
// console.log(tuple[1]);
//
var tuple1;
tuple1 = ["masai", 3, "school"];
// console.log(tuple[1]);
//
//
// Enums -> A group of named contants
// e.g. const GET_DATA_REQUEST = "GET_DATA_REQUEST";
//
var Color;
(function (Color) {
    Color["RED"] = "RED";
    Color["GREEN"] = "GREEN";
    Color["BLUE"] = "BLUE";
})(Color || (Color = {}));
// console.log(Color);
var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["GREEN"] = 1] = "GREEN";
    color[color["BLUE"] = 2] = "BLUE";
})(color || (color = {}));
// console.log(color[0], color["RED"]); // CAN access by both index of string
//
// Other types
var u;
var n;
var a;
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
function sum(a, b) {
    return a + b;
}
// console.log(sum(2,2));
// console.log(sum("2","2"));
function summ(a, b) {
    if (a === void 0) { a = 2; }
    if (b === void 0) { b = 5; }
    return a + b;
}
// console.log(summ(3));  // can also pass 1 argument as we have default params as well
//
// (a:number,b:number):number <= this number verify that output should be a number
function func(a, b) {
    return a + b;
}
// (a:number,b:string):string <= this number verify that output should be a string
//
// void keyword if function is not returning anything
var printPerson = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("".concat(name, " ").concat(age));
};
printPerson(obj1);
//
// Union
//  A U B -> combinig multiple types together
var output;
output = ["Masai", 3, 3, "ram", "lakhan", 121];
//
// Interaction
//
var masaiStudent = {
    age: 20,
    name: "Masai"
};
var response;
// 
// 
// axios("URL").then((r)=>{
//     r.data.forEach((item:responseObject)=>{
//         let length = item.name.length;
//     })
// })
function check() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(typeof args);
}
check(100);
tuple.push("10");
console.log(tuple);
(function (a) {
    return (function () {
        console.log(a);
        a = 101;
    })();
})(100);
//# sourceMappingURL=index.js.map