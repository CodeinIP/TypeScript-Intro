interface task {
    title: string;
    status: boolean;
    id: number;
}
declare let task1: task;
interface name {
    first_name: string;
    last_name?: string;
}
declare function getName({ first_name, last_name }: name): string;
interface address {
    houseNumber: number;
    street: number;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
declare let myAddress: address;
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
declare let myDetails: PersonDetails;
declare let details: any[];
declare function PhoneBook(PersonDetails: {}): any[];
