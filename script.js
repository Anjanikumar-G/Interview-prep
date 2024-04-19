// 1. What are the different data types present in javascript?

// ans: To know the type of a JavaScript variable, we can use the typeof operator.
//     1. Primitive types
//       .String
//       .Number
//       .BigInt
//       .Boolean
//       .Undefined
//       .Null
//       .Symbol
//     2. Non-primitive types
//        Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.
//        Object - Used to store collection of data

// 2. Explain Hoisting in javascript.

// ans: Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.
//     example :
//             hoistedVariable = 3;
//             console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
//             var hoistedVariable;

// 3. Why do we use the word “debugger” in javascript?

// ans: The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off,
//      requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.

// 4. Difference between “ == “ and “ === “ operators.

// ans: Both are comparison operators. The difference between both the operators is that “==” is used to compare values
//       whereas, “ === “ is used to compare both values and types.

// 5.Difference between var and let keyword in javascript.

// ans: Variables declared by let are only available inside the block where they’re defined.
//      Variables declared by var are available throughout the function in which they’re declared.

// 6. What is NaN property in JavaScript?

// ans: NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.
//      typeof of NaN will return a Number.
//      To check if a value is NaN, we use the isNaN() function,

// 7. Is javascript a statically typed or a dynamically typed language?

// ans: JavaScript is a dynamically typed language. In a dynamically typed language,
//      the type of a variable is checked during run-time in contrast to a statically typed language,
//      where the type of a variable is checked during compile-time

// 8.What is an Immediately Invoked Function in JavaScript?

// ans: An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.
//      Syntax of IIFE :

//      (function(){
//         // Do something;
//      })();

// 9. Explain passed by value and passed by reference.

// ans:JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

//     Pass by Value :
//     JavaScript is primarily a “pass by value” language. But what does this mean?

//     Pass by value means when a variable is assigned to another variable, the value stored in the variable is copied into the new variable.
//     They are independent of each other, each occupying its own memory space.

//     let a = 10;
//     let b = a;

//      a = 20;

//     console.log(a); // Outputs: 20
//     console.log(b); // Outputs: 10

//     Pass by Reference :
//    While JavaScript is primarily a “pass by value” language, it uses a concept called “pass by reference” when dealing with objects (including arrays and functions).
//    When an object is created in JavaScript, it is stored in a memory space,
//    and the variable associated with it stores the memory address or reference where the object is stored.

//    let obj1 = { value: 10 };
//    let obj2 = obj1;

//     obj1.value = 20;

//     console.log(obj1.value); // Outputs: 20
//     console.log(obj2.value); // Outputs: 20

// 10.what is difference between let const and var in javascript ?

//  ans: var
//       This is the oldest keyword for declaring variables in JavaScript. It is function-scoped, which means it can be re-declared and updated.
//       let
//       This is an improved version of var. It is block-scoped, which means it can only be updated, not re-declared.
//       const
//       This is also block-scoped like let, but it cannot be updated or re-declared

// 11.what is callback function in javascript

// ans: A callback function is a function that is passed as an argument to another function.The purpose of a callback function is to execute code after another function has finished executing

// 12.What is an Immediately Invoked Function in JavaScript?

// ans: An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.

//      Syntax of IIFE :

//      (function(){
//      // Do something;
//      })();

// 13.Explain “this” keyword

// ans:The “this” keyword refers to the object that the function is a property of.
//     The value of the “this” keyword will always depend on the object that is invoking the function
// Example :

// var obj = {
//     name:  "vivek",
//     getName: function(){
//     console.log(this.name);
//   }
// }

// obj.getName()

// 14. Explain call(), apply() and, bind() methods

// ans: 1. call():
//     It’s a predefined method in javascript.
//     This method invokes a method (function) by specifying the owner object.
// Example :
// var person = {
//   age: 23,
//   getAge: function(){
//     return this.age;
//   }
// }
// var person2 = {age:  54};
// person.getAge.call(person2);
// // Returns 54
//     2.apply()
//     The apply method is similar to the call() method. The only difference is that,
//     call() method takes arguments separately whereas, apply() method takes arguments as an array.
// Example :
// function saySomething(message){
//   return this.name + " is " + message;
//   }
// var person4 = {name:  "John"};
// saySomething.apply(person4, ["awesome"]);
// // Returns "John is awesome"
//   3. bind()
//   This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.
// Example :
// var bikeDetails = {
//     displayDetails: function(registrationNumber,brandName){
//     return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
//   }
// }
// var person1 = {name:  "Vivek"};
// var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
// // Binds the displayDetails function to the person1 object
// detailsOfPerson1();
// //Returns Vivek, bike details: TS0122, Bullet

// 15.Explain Scope and Scope Chain in javascript

// ans:Scope in JS determines the accessibility of variables and functions at various parts of one’s code.
//     In general terms, the scope will let us know at a given part of code, what are variables and functions we can or cannot access.
// There are three types of scopes in JS:
//     1.Global Scope
//     2.Local or Function Scope
//     3.Block Scope

//    1. Global Scope: Variables or functions declared in the global namespace have global scope, which means all the variables and functions having global scope can be accessed from anywhere inside the code.

// var globalVariable = "Hello world";
// function sendMessage(){
//   return globalVariable; // can access globalVariable since it's written in global space
// }
// function sendMessage2(){
//   return sendMessage(); // Can access sendMessage function since it's written in global space
// }
// sendMessage2();  // Returns “Hello world”

//    2.Function Scope: Any variables or functions declared inside a function have local/function scope, which means that all the variables and functions declared inside a function, can be accessed from within the function and not outside of it.

// function awesomeFunction(){
//   var a = 2;
//   var multiplyBy2 = function(){
//     console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
//   }
// }
// console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside
// multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope

//    3.Block Scope: Block scope is related to the variables declared using let and const. Variables declared with var do not have block scope. Block scope tells us that any variable declared inside a block { }, can be accessed only inside that block and cannot be accessed outside of it.

// {
//   let x = 45;
// }
// console.log(x); // Gives reference error since x cannot be accessed outside of the block
// for(let i=0; i<2; i++){
//   // do something
// }
// console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block
