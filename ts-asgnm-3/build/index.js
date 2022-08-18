function getUserType(obj) {
    return obj.type;
}
let admin1 = {
    type: "Admin",
    name: "Inder",
    age: 24,
    role: "developer",
};
let user1 = {
    type: "user",
    name: "Punk",
    age: 4,
    occupation: "driver",
};
console.log(getUserType(admin1));
console.log(getUserType(user1));
//# sourceMappingURL=index.js.map