//Extracts the last element of the array and return it;
let fruits = ["Pine", "Banana", "Pear"];
console.log( fruits.pop() ); // remove "pear" and console.log it
console.log ( fruits ); // Pine, Banana

//Append the element to the end of the array:
fruits.push("Pear");
console.log( fruits ); // Pine, Banana, Pear

//Methods that work width the beginning of the array:
console.log( fruits.shift() ); //remove Pine and console.log it 
console.log( fruits ); //Banana,Pear

// Add the element to the begining of the array:
fruits.unshift('Pine');
console.log( fruits ); // Pine, Banana, Pear