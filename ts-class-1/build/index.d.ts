declare let isFinished: boolean;
declare let amount: number;
declare let first_name: string;
declare let last_name: string;
declare let full_name: string;
declare let arr1: number[];
declare let arr2: string[];
declare let arr3: Array<number>;
declare type person = {
    name: string;
    age: number;
    workingDays?: number;
};
declare type address = string;
declare type softwareEngineer = {
    skill?: string;
};
declare let add: address;
declare let obj1: person;
declare let arrPerson: person[];
declare let tuple: [string, string, number?];
declare let tuple1: [string, number, string];
declare enum Color {
    RED = "RED",
    GREEN = "GREEN",
    BLUE = "BLUE"
}
declare enum color {
    RED = 0,
    GREEN = 1,
    BLUE = 2
}
declare let u: undefined;
declare let n: null;
declare let a: any;
declare function sum(a: number, b: number): number;
declare function summ(a?: number, b?: number): number;
declare function func(a: number, b: string): string;
declare const printPerson: ({ name, age }: person) => void;
declare let output: (number | string)[];
declare let masaiStudent: person & softwareEngineer;
declare type responseObject = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};
declare let response: responseObject[];
declare function check(...args: any[]): void;
