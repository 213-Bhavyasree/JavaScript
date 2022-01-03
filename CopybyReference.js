let fruits = ["Banana"]
let arr = fruits;

console.log ( arr === fruits );
arr.push("Pear");
console.log( fruits );

for (let i = 0; i < arr.length; i++) {
    console.log( arr[i] );
}

for (let fruit of fruits) {
    console.log( fruit );
}