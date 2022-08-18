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
declare function getUserType(obj: User | Admin): "user" | "Admin";
declare let admin1: Admin;
declare let user1: User;
