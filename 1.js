//                                          JAVASCRIPT
// Variables are containers for storing data values in a program,provide named reference to memory location.var,let or cons.
// Function level scope(variables are declared  with var) vs Block level scope.(variables declared with var and let keyword.)
// They are limited to the block of statement in which they are declared.(BLS), while it is accisble throughout the entire function(FLS)
// function exampleFunction(){
//     if(true){
//         var functtionScopeVar = "I am function-scoped";//Declare a variable
//     }
//     console.log(functionScopedVar);//"I am a function-scoped"
// }
// exampleFunction();//calling the function to execute.
// console.log(functionScopedVar);//Error: functionScopedVar is not defined
// Declare the last statement inside the block to print the function.
// If you change var with let then also it will give error.  for let print the condition inside the if condition.



// Variables declared with let are block-scoped,meaning they are accessible only within the block in which they are defined.(1995)
// var a = 2;
// var a = 3;
// console.log(a);   wrong pratice

// let a = 2;
// let a = 3;
// console.log(a); 
 
// Shadowing - Local variables can "shadow" global variables with the same name. The local variable takes precedence within its scope.
// Local variable are given preference in local scope as compared to global scope
// var shadowedVar = "I am global";
// function exampleFunction(){
//     var shadowedVar = "I am local";
//     console.log(shadowedVar);//"I am local"
// }
// exampleFunction();
// console.log(shadowedVar);//"I am global"
// If you use let keyword you will get same result (redeclaring a variable with same name in let keyword with another scope)


// CONS - you can't overwritten or change the constant value.
// Behaving same like let as it is also block - level scope.


//                              HOISTING
//It is a javaScript behaviour where variable and function declarations are moved to the top of their scope during the compilation phase before the code is executed.
// This behaviour allows you to use variables and functions before they are declared in the code. (Imp- only the declarations are hoisted, not the initializations.)

// Hoisting with Var keyword.

// console.log(x);//undefined as it is not declared
// var x = 5;
// console.log(x);//5

// console.log(x);
// let x = 3;
// console.log(x);       hoisting was happened as it is showing that x is not defined 

// Variables declared with let or const are hoisted WITHOUT a default initialization.So,accessing them before the line they were declared throws ReferenceError: Cannot access 'variable'before initialization.
// But variables declared with var are hoisted WITH a default initialization of undefined.So,accessing them before the line they were declaed returns undefined.


// Hoisting with functions...

// hello();//"Hello world!"
// function hello(){
//     console.log("Hello world!");
// }


// Hoisting Caveats


// While the declarations are hoisted initializations are not hoisted so trying to access the value of a variable before its declaration and assignment will result in undefined .
// It  is good to declared variable at the top of the scope to avoid confusion

//              DATA TYPES..
// 1. Primitive data types: a.String: - Represent textual data.Enclosed in(') or double("")quotes.
//  let name ="Ujjwal";(bydefault it is of string type)
// Checking..
// Typeof Operator :  
// let exampleVar = "Hello";
// console.log(typeof(exampleVar));//"String"

// Type Coercion:When operators are used with different datatypes .  Values are automatically converted to a common type during an operation.
// let result = 5 + "5";//Result is the string "55"
// console.log(result);


// Number: Represent numeric values.Can be integers or floating-poit numbers.
// let age = 25;
// let pi = 3.14;
// console.log(typeof(age));
// console.log(typeof(pi));

// Boolean: Represent true or false values.Used for logical operations.
// let isStudent = true;
// console.log(typeof(isStudent));

// Object Data Type: A collection of key value pairs. Keys and strings, and values can be of any data type including other objects.
// let person ={
//     name: "Alice",
//     age: 30,
//     isStudent:false
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person);



//                                  DAY - 2

// b.Array -  An ordered list of values.
// Working with loops: 1)- For Loop: -  Executes a block of code a specified number of times.
// for(let i = 0; i<5; i++) {
//     console.log(i);
// }
// 2) - While Loop- Repeats a block of code while a specified condition is true.
// let count = 0;
// while(count < 5) {
//     console.log(count);
//     count++;
// }
// 3)Do while loop - Similar to a while loop,but it ensures that the code block is executed at least once.
// let count = 0;
// do{
//     console.log(count);
//     count++;
// } while(count < 5);
// 4) for...in Loop: - Iterated over the properties of an object.
// let person = { name: "John" , age: 30, occupation: "Developer"};
// for(let key in person) {
//     console.log(key + ": " + person[key]);
// }

// Understanding Javascript objects.(How to define objects)
//Object literal notation  -     line6-function without name
// let car = {
//     make:"Land rover",
//     model:"Range Rover",
//     year:2022,
//     isElectric:false,
//     start:function() {                  
//         console.log("Engine started");
//     } 
// };
// console.log(car.make);
// console.log(car.year);
// car.start();
// console.log(car);

// // Object Constructors - tittle,author,year;
// function Book(tittle, auother, year) {
//     this.tittle=tittle;
//     this.auother=auother;
//     this.year=year;
// }
// let book1 = new Book("The Catcher in the Rye","J.D. Salinger",1951);
// let book2 = new Book("Atomic Habits","Ujjwal Dixit",2020);

// Working with Arrays:


// let fruits = ["apple","banana","orange","grape"];
// console.log(fruits[0]);
// console.log(fruits[3]);
// //Adding elements to the end.
// fruits.push("kiwi");
// console.log(fruits);
// //Adding elements to the beginnig.
// fruits.unshift("mango");
// console.log(fruits);
// //Removing the last element
// let removedLast = fruits.pop();
// console.log(removedLast);
// console.log(fruits);
// // Removing the first element.
// let removedFirst = fruits.shift();
// console.log(removedFirst);
// console.log(fruits);
// //Finding index of an element.
// let indexofOrange = fruits.indexOf("orange");
// console.log(indexofOrange);
// //Iterating using a for loop.
// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// //Slicing an array.
// let citrus = fruits.slice(1,3);  //3-1=2  (n-1)
// console.log(citrus);

// //splicing an array(modifying original array)
// let removed = fruits.splice(1,2,"pear","melon");
// console.log(fruits);
// //concatenating arrays
// let moreFruits = ["grapesfruit","pineapple"];
// let allFruits = fruits.concat(moreFruits);
// console.log(allFruits);

// Basic commands of git - commands.//HW.
// Summary of Arrays.


// Simple function.
// Function Expression.

// const multiply = function(a,b) {
//     return a*b;
// };
// //Invocation.
// const product = multiply(4,6);
// console.log('Function Expression - Product: ',product);
// Arrow function 


// const subtract = (a, b) => a - b;
// const difference = subtract(8,3);
// console.log('Arrow function - Difference: ',difference);


//                  Timers in javascript.


// setTimeout Function - Executes a function or a piece of code after a specified delay.

// const delayedFunction = () => {
//     console.log('Delayed function executed!');
// };
// setTimeout(delayedFunction,2000);

// setInterval Function - executes a function or a piece of code repeatdly at a specified interval.

// const repeatedFunction = () => {
//     console.log('Repeated function executed!');
// };
// const intervalId = setInterval(repeatedFunction,1000);
// In case you want to stop after sometime.(all are inbuilt function for writing asynchronous code)


// function repeatedFunction() {
//     console.log('Executing repeated function...');
// }
// const intervalId = setInterval(repeatedFunction,1000);
// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Interval stopped');
// },5000);

// Callbacks - functions that are passed as arguments to other functions and are executed after the completio of an asynchronous operation or a certain event.
// Synchronous(Executes instantly - definite order) vs asynchronous callback function(exeutes after a certain amount of time - no definite order)..
// Synchronous example.
// function parentFunction(name, callback){
//     callback();
//     console.log("Hey "+name);
// }
// function randomFunction(){
//     console.log("Hey I am callbackfunction");
// }
// parentFunction("Random String",randomFunction);

// Asynchronous callback Function.

// function parentFunction(name, callback){
//     setTimeout(callback,1000);
//     console.log("Hey "+name);
// }
// function randomFunction(){1
//     console.log("Hey I am callbackfunction");
// }
// parentFunction("Random String",randomFunction);
// shorter code
// function parentFunction(name, callback){
//         setTimeout(callback,1000);
//         console.log("Hey "+name);
//     }
//     const randomFunction = () => console.log("Hey , I am callback function");
//     parentFunction("Random String",randomFunction);
// Importance of callback function .


// TYPESCRIPT.

