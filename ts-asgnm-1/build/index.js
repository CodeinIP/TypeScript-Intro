// tuple
let tuple1;
// example
let tup = ["punk", true];
// enum
var Users;
(function (Users) {
    Users[Users["User"] = 0] = "User";
    Users[Users["SuperUser"] = 1] = "SuperUser";
    Users[Users["Admin"] = 2] = "Admin";
    Users[Users["SuperAdmin"] = 3] = "SuperAdmin";
})(Users || (Users = {}));
// function with two arguments x and y both numbers
function product(a, b) {
    return a * b;
}
// example
let prod1 = product(4, 6);
console.log(prod1);
// function with two argumnet x and y returning ratio
function divide(x, y) {
    return x / y;
}
// example
let div1 = divide(10, 3);
console.log(div1);
// function without return statement
function printName(name) {
    console.log(name);
}
printName("Inder");
//# sourceMappingURL=index.js.map