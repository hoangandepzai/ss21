let a = prompt("Nhập số a:");
let b = prompt("Nhập số b:");
let c = prompt("Nhập số c:");

let numbers = [a, b, c];
numbers.sort((a, b) => a - b);

console.log("Các số theo thứ tự tăng dần: " + numbers.join(", "));
