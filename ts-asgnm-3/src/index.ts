// Retrieve type of user of admin
interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}
interface Admin {
  type: "Admin";
  name: string;
  age: number;
  role: string;
}
function getUserType(obj: User | Admin) {
  return obj.type;
}

let admin1: Admin = {
  type: "Admin",
  name: "Inder",
  age: 24,
  role: "developer",
};
let user1: User = {
  type: "user",
  name: "Punk",
  age: 4,
  occupation: "driver",
};
console.log(getUserType(admin1));
console.log(getUserType(user1));
