// Diff ways to create n object in js

// Read More : here https://github.com/sudheerj/javascript-interview-questions#what-are-the-possible-ways-to-create-objects-in-javascript

// Visit This Notion Lik :   https://www.notion.so/monkashu/1000-Question-e6d62fc832e4400a88d515182f3f9c27

// I will update Details Here only

//1 object constructor

var object = new Object();

console.log(object); // {}

// 2.  Object Create method

var obj2 = Object.create(null);

console.log(obj2); //[Object: null prototype] {}

// 3. Simplest Way Object Literal

var obj3 = {
  name: "ABCD",
};

console.log(obj3); //{ name: 'ABCD' }

//Object literal property values can be of any data type, including array, function, and nested object.

// 4. Function Constructor

function User(name) {
  this.name = name;
  this.age = 21;
}

var obj4 = new User("Kamal");

console.log(obj4); //User { name: 'Kamal', age: 21 }

// 5.  Function Constructor with Prototype

function User2() {}

User2.prototype.name = "Ashu";
var obj5 = new User2();

console.log(obj5); // User2 {}

// This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.
//  Last type 5 , I am not able to understand

// 6.  ES6 Class syntax

class User3 {
  constructor(name) {
    this.name = name;
  }
}

var obj6 = new User3("Ashu");

console.log(obj6); //User3 { name: 'Ashu' }

// 7. Singleton Pattern

// A singleton is an object which can only be inititated one time
// Reapeated calls its constructor return the same instance and this way we can ensure that they
// dont accidently create multiple instances

var obj7 = new (function () {
  this.name = "Ashu";
})();

console.log(obj7); //{ name: 'Ashu' }

// New Words

// To be learnt and discussed

// Constrictor
//Singleton
//Prototype
// create methods of Object
