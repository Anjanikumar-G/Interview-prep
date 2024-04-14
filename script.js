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
