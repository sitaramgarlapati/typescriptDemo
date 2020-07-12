export = {};

let add = (a: number, b:number) => {
    console.log(a + b);
}

const add2 = (a: number, b:number) => {
    return (a+b);
}

let result = add2(10, 20);
console.log(result);

//mentioning return type explicity
const add3 = (a: number, b:number): void => {
    console.log(a + b);
}
const add4 = (a: number, b:number) : number => {
    return (a+b);
}

//type Alias 
//in case of tuples
const logDetails = (userid: number|string, orderItem:string) => {
    console.log(`The user Id is ${userid}` );

}

//alias tyle
type StringOrNum = string | number;

const logDetails2 = (userid: StringOrNum) => {
    console.log(`The user Id is ${userid}` );
}


//function signatures
let signatureSample : (a: string, b: string) => void;

signatureSample = (firstName: string, lastName: string ) => {
    console.log(`Full name is ${firstName} ${lastName}`);
}

signatureSample("sitaram", "g");

//when function return type is not mentioned typescript inferes the type
let calc: (numberOne : number, numberTwo: number, action: string)  => number;

calc = (numberOne : number, numberTwo: number, action: string) => {
    if(action === 'add'){
        return numberOne + numberTwo;
    }
    return numberOne - numberTwo;
}

console.log(calc(10,5,'add'));


