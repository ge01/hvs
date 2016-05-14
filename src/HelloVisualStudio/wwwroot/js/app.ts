/*
try {
    alert("Hello World");
}


catch (err) {
    document.write("an error occured");
}
*/

//////////////////////////////////////////////////////
//Camp: Full Stack .NET                             //
//Section: Unit 2 - JavaScript / ECMAScript 2015    //
//Lesson: ES2015 Basics - Handling Errors           //
//////////////////////////////////////////////////////
/*
function divideNumbers(a, b) {
    try {
        //Block of code to try
        if (b == 0) {
            throw new Error("b cannot be zero!");
        } else {
            console.log(a / b);
        }
    }
    catch (err) {
        //Block of code to handle errors
        console.log(`${err.name}: ${err.message}`);
    }
    finally {
        //Block of code to be executed regardless of the try / catch result
        console.log("girls just want to have fun");
    }
}

divideNumbers(1, 2);
divideNumbers(1, 0);
*/
//////////////////////////////////////////////////////
//Camp: Full Stack .NET                             //
//Section: Unit 2 - JavaScript / ECMAScript 2015    //
//Lesson: ES2015 Basics - Using Template Literals   //
//////////////////////////////////////////////////////
/*
let message = "Hello World";
let message1 = 'Hello World';
var message2 = `Hello World`;

let firstName = `Bob`;
let message3 = `Hello $(firstName)!`;
console.log(message3);

let firstNumber = 5;
let secondNumber = 3;
let message4 = `The number ${firstNumber} times the number ${secondNumber} is equal to ${firstNumber * secondNumber}`;

console.log(message4);
*/
//////////////////////////////////////////////////////
//Camp: Full Stack .NET                             //
//Section: Unit 2 - JavaScript / ECMAScript 2015    //
//Lesson: ES2015 Basics - Using for..of Loops       //
//////////////////////////////////////////////////////
/*
var animals = ["lion", "tiger", "bear"];

//For Loop
for (let i = 0; i < animals.length; i++) {
    console.log(i);
}

//for..in loop
for (let key in animals) {      // I think key is the index number
    console.log(key);
}

for (let klingon of animals) {
    console.log(klingon);
}
*/
//////////////////////////////////////////////////////
//Camp: Full Stack .NET                             //
//Section: Unit 2 - JavaScript / ECMAScript 2015    //
//Lesson: ES2015 OOP- Methods                       //
//////////////////////////////////////////////////////
/*
// A Method is basically a field that represents a function
var product = {                 //The product object
    name: 'Tesla',
    price: 40000,
    print: function () {        //The print method
        console.log(this.name + ' costs $' + this.price);
    }
};

// short hand for writing a method
var product1 = {                 //The product1 object
    name: 'Explorer',
    price: 50000,
    print() {        //the function keyword isn't being used for The short hand syntax
        console.log(this.name + ' costs $' + this.price);
    }
};

product.print();
*/

//////////////////////////////////////////////////////
//Camp: Full Stack .NET                             //
//Section: Unit 2 - JavaScript / ECMAScript 2015    //
//Lesson: ES2015 OOP - Fields vs Properties         //
//////////////////////////////////////////////////////
/*
let pet = {
    _name: "",  //This is a field
    set name(value) {   //This is a property(setter)
        this._name = value;
    },
    get name() {    //This is a property(getter done)
        return this._name;
    }
}

pet.name = "Rex";
console.log(pet.name);

let customer = {
    firstName: '',
    lastName: '',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

customer.firstName = 'Cody';
customer.lastName = 'Shipley';

console.log(customer.fullName);

//using setters can be usefull when performing validation
// this prevents anyone from assigning a zero to the price property
let product = {     // product object
    _price: 0,      // price field

    set price(value) {
        if (value < 0) {
            throw new Error('price cannot be less than 0.');
        }
        this._price = value;
    },

    get price() {
        return this._price
    }
};

product.price = -300.00;    // throws
console.log(product.price);
*/
//////////////////////////////////////////////////////
//Camp: Full Stack .NET                             //
//Section: Unit 2 - JavaScript / ECMAScript 2015    //
//Lesson: ES2015 OOP - Classes                      //
//////////////////////////////////////////////////////
//JavaScript classes are really just syntactical wrapper around JavaScript prototype based inheritance.
/*
class Customer {
    name: string;
    phone: string;
}

let newCustomer = new Cuxtomer();
newCustomer.name = "Cody";
newCustomer.phone = "111-222-3333";

console.log('Customer name: ${newCustomer.name}, Phone: ${newCustomer.phone}');

//Methods are function that live inside of an object
*/
//////////////////////////////////////////////////////
//Camp: Full Stack .NET                             //   
//Section: Unit 2 - JavaScript / ECMAScript 2015    //
//Lesson: ES2015 OOP - Inheritance                  //
//////////////////////////////////////////////////////
/*
class Vehicle {

    constructor(public year, public make, public model) { }

    report() {
        console.log(`Year: ${this.year}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
    }
}

class Car {

    constructor(public year, public make, public model, public doors, public type) { }

    report() {
        console.log(`Year: ${this.year}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Doors: ${this.doors}`);
        console.log(`Type: ${this.type}`);
    }
}
*/

abstract class Computer {
    constructor(public price, public model) { }
}

class Mac extends Computer {

    constructor(price, model) {
        super(price, model);
    }
    operatingSystem: string;
}

class Windows extends Computer {

}

var comp1 = new Windows(544.89, "Dell");
comp1.operatingSystem = "Windows 8.1";