export {};

////Type Annotation/////////
//Numbers
//Does not have separate integer and float/double type.
var num : number = 20;
var num = 20.6;

//Both single quote or double quotes can be used.
var name : string = "hello";
var name = 'Hello'; 


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

//enum
enum Color { Red, Green, Blue };
var color = Color.Blue;


////////Arrays/////////
 var list: number[] = [1, 2, 3];
 var list: Array<number> = [1, 2, 3];
//var list:any[] = [1, true, "free"]

let names = ["mario", "casio", "rio"];
names.push('kiro');
//names.push(100);

let numbers = [10,20,30,40];
numbers.push(50);
//numbers.push("cairo");

//Tuple types allow you to express an array where the type of a fixed number of elements is known.
var x: [string, number];
        x = ['hello', 10];

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