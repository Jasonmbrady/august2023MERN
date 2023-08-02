//                                     SCOPE
// GLOBAL

var x = 1;
var y = 2;

// FUNCTION
function myFunction(unicorn){
    for (let i = 0; i < 5; i++){
        // console.log("hello, world!");
        console.log(unicorn);
    }
    for (let i = 0; i < 5; i++){
        // console.log("hello, world!");
        // console.log(unicorn);
    }
    


    // someData.pop();
    // console.log(someData);
    // DO STUFF HERE
    // var myString = "This is a string";
    // myString = 1000;
}

myFunction("Sup, World!");
// console.log(myString);

// DESTRUCTURING
let a = 10;
let b = 5;
// SWAP
// let temp = a;
// a = b;
// b = temp;
// Destructured swap
[a, b] = [b, a];
console.log( a, b)
 const student = {
    firstName: "Jason",
    lastName: "Brady",
    grade: "A"
 }

//  let firstName = student.firstName;
//  let lastName = student.lastName;
const {firstName, lastName} = student;
// console.log(firstName);

const thisStudent = {...student, grade:"B"};
console.log(student);
console.log(thisStudent);

const someData = ["this is data", "Here is more data"];
    // someData = "Other data";
    Object.freeze(someData);

const moreData = [...someData, "other data"];
// const moreData;
// for (let i=0; i<someData.length; i++){
//  moreData.push(someData[i]);
//}