/// example
let task1 = {
    title: "Learn react",
    status: true,
    id: 1,
};
console.log(task1);
function getName({ first_name, last_name }) {
    return first_name + last_name;
}
let myAddress = {
    houseNumber: 3,
    state: "Himachal Pradesh",
    city: "Bilaspur",
    postalCode: 170030,
    country: "INDIA",
    street: 5,
};
console.log(myAddress);
let myDetails = {
    addresses: [{ personalAddress: "a", officialAddress: "a" }],
    firstname: "Inder",
    lastname: "Pal"
};
// 5. PhoneBook
// 
let details = [];
function PhoneBook(PersonDetails) {
    details.push(PersonDetails);
    details.push(PersonDetails);
    return details;
}
PhoneBook(myDetails);
console.log(details);
// details.push(myDetails);
// console.log(details);
//# sourceMappingURL=index.js.map