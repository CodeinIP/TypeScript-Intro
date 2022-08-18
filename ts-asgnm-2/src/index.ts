// 1. Interface of an object
interface task {
  title: string;
  status: boolean;
  id: number;
}
/// example
let task1: task = {
  title: "Learn react",
  status: true,
  id: 1,
};
console.log(task1);

// 2. function getName
interface name {
  first_name: string;
  last_name?: string;
}
function getName({ first_name, last_name }: name): string {
  return first_name + last_name;
}

// 3.
interface address {
  houseNumber: number;
  street: number;
  city: string;
  state: string;
  postalCode: number;
  country: string;
}
let myAddress: address = {
  houseNumber: 3,
  state: "Himachal Pradesh",
  city: "Bilaspur",
  postalCode: 170030,
  country: "INDIA",
  street: 5,
};
console.log(myAddress);

// 4. personalDetail interface
interface PersonDetails {
  prefix?: string;
  addresses?: addresses[];
  phones?: phones[];
  email?: string;
  firstname: string;
  lastname: string;
  middlename?: string;
}
interface addresses {
  personalAddress: string;
  officialAddress: string;
}
interface phones {
  personalNumber: number;
  officialNumber: number;
}
let myDetails:PersonDetails = {
    addresses:[{personalAddress:"a",officialAddress:"a"}],
    firstname:"Inder",
    lastname:"Pal"
}

// 5. PhoneBook
// 
let details = [];
function PhoneBook(PersonDetails:{}){
    details.push(PersonDetails);
    details.push(PersonDetails);
    return details;
}
PhoneBook(myDetails);
console.log(details);



// details.push(myDetails);
// console.log(details);

