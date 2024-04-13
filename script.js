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
