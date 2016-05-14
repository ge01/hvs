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
var pet = {
    _name: "",
    set name(value) {
        this._name = value;
    },
    get name() {
        return this._name;
    }
};
pet.name = "Rex";
console.log(pet.name);
var customer = {
    firstName: '',
    lastName: '',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};
customer.firstName = 'Cody';
customer.lastName = 'Shipley';
console.log(customer.fullName);
//using setters can be usefull when performing validation
// this prevents anyone from assigning a zero to the price property
var product = {
    _price: 0,
    set price(value) {
        if (value < 0) {
            throw new Error('price cannot be less than 0.');
        }
        this._price = value;
    },
    get price() {
        return this._price;
    }
};
product.price = -300.00; // throws
console.log(product.price);
//# sourceMappingURL=app.js.map