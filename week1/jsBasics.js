// Variables and naming conventions | camelCase | PascalCase
var myString = "This is a string";
var myOtherString = "This is another string";

// Data Types
// PRIMITIVE | PASS BY VALUE
    // String  " " | ' ' | ` `
var myName = "Jason";
console.log("Hello, " + myName + " how are you today?" ) // concatenation
console.log(`Hello, ${myName} how are you today?`) // interpolation

    // Number int ( 10 ) and float ( 10.0 )
var myInteger = 4;
var myFloat = 3.141;
var myOtherInteger = myInteger;
myInteger = 5;
    // Boolean true or false
var myBoolean = false

// STRUCTURES, COLLECTIONS | PASS BY REFERENCE
    // Arrays   0                    1                   2     3
var myArray = [42, "Life, the universe and everything", true, []];
var fruitIRandomlyCameUpWith = ["apple", "banana", "guava"]
console.log(fruitIRandomlyCameUpWith);
fruitIRandomlyCameUpWith.push("pineapple");
var lastFruit = fruitIRandomlyCameUpWith.pop();
console.log(fruitIRandomlyCameUpWith[2]);
    // Objects
var student = { firstName: "Jason", lastName: "Brady", age: 44 };
var wantedKey = "firstName";
console.log(student[wantedKey]);
console.log(student.firstName, student.age);

var anotherStudent = student;
student.age = 24;
console.log(anotherStudent.age)
var age = student.age;
delete student["age"];

// Anatomy of a function
function addTwoNums(num1, num2){
    return num1 + num2;
}

console.log(addTwoNums(7, 12));