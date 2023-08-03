// ARROW FUNCTIONS
const addTwoNums = (num1, num2) => num1 + num2;
const helloWorld = () => "Hello, world!";
const printString = str => console.log(str);
// const register = user => console.log(user);

// function printString(str){
//     console.log(str);
// }

// console.log(addTwoNums(1, 2));
// console.log(helloWorld());
// printString("This is a string");
// TERNARY EXPRESSIONS

const coinFlip = () => {
    const flip = Math.floor(Math.random() * 2);
    console.log(flip);   
    return flip > 0 ? "Heads" : "Tails";
    // if (flip > 0){
    //     return "Heads"
    // } else {
    //     return "Tails"
    // }
    // 0 to 1
}

console.log(coinFlip());