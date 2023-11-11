
// ********************************** NUMBERS ******************************************


const balance=100;
console.log(balance);

console.log(balance.toString());         // 100 - Ab ye string bn chuki hai
console.log(balance.toString().length);  // 3 - 100 me 3 characters
console.log(balance.toFixed(2));         // 100-00 - 2 decimal points tk ka


const num=3.2324;
console.log(num.toPrecision(3));         // 3.23 - Shuru ki 3 values pr focus krna hai
console.log(num.toPrecision(4));         // 3.232 - Shuru ki 4 values pr focus krna hai








// ********************************** MATHS ******************************************

console.log(Math.abs(-11));       // Absolute value
console.log(Math.round(4.5));     // Roundoff
console.log(Math.ceil(4.2));      // 5 Upr wli value se match krega
console.log(Math.floor(4.6));     // 4 Upr wli value se match krega
console.log(Math.min(4,1,5,7,2)); // 1 - Min value calculate krega
console.log(Math.random());       // Koi bhi random value generate krega
console.log(Math.random());       // Koi bhi random value generate krega



// Generating random number between 2 ranges
const min=10;
const max=20;
console.log(Math.floor(Math.random() * (max-min+1)) + min );   // Any random value between 10 and 20
console.log(Math.floor(Math.random() * (max-min+1)) + min );   // Any random value between 10 and 20
console.log(Math.floor(Math.random() * (max-min+1)) + min );   // Any random value between 10 and 20
console.log(Math.floor(Math.random() * (max-min+1)) + min );   // Any random value between 10 and 20 