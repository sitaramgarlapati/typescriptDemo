export {};

////Type Annotation/////////
let userName = "Mario";
let age = 30;
let isValid = true;

//error
//userName = 20;
//age = 'casio';
age = 40;
console.log(userName);

//isValid = "yes";
isValid = false;


////////Arrays/////////
let names = ["mario", "casio", "rio"];
names.push('kiro');
//names.push(100);

let numbers = [10,20,30,40];
numbers.push(50);
//numbers.push("cairo");

//tuples
let mixed = ['mario',1, 'casiio',2];
mixed.push('mitro');
mixed.push(10);
mixed[0] = 3;

/////Objects//////////
let user ={
    name: 'mario',
    age: 30,
    isValid: true
};

//user.age = 'sample';
//once object is defined can;t add properties, can't change the structure also
//because of strict typing
//user.skills = ['.net','JS'];

//Explicit types
let customer: string;
let customerAge: number; 
let isLoggedIn: boolean;

//variable value can be assigned
customer = "bolt";
customerAge = 30;
isLoggedIn = true;

//for arrays 
//let orders : string[];
//best practice 
let orders : string[] = [];

orders.push('laptop');

let input1 = 20;
let input2 = 30;
let result;

//union Types
let customerId: string|number;
customerId = 1234;
customerId = 'test';

console.log(customerId);

////////Any Type////the JS feature
let orderId: any = 45;

orderId = true;
console.log(orderId);

orderId = 'OR12005';
console.log(orderId);
//similarly arrays


