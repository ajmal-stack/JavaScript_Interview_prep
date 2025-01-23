// function example() {
//   if (true) {
//     var x = 10; // var is function-scope not block-scope
//     console.log(x);
//   }
//   console.log(x);
// }
// example();
// console.log(x); // it will gives me the reference error
//

// function example2() {
//   if (true) {
//     let y = 12; //let is block-scope
//     console.log(y);
//   }
//   console.log(y); //gives me the refence error
// }

// example2();

// let age = 18;

// if (age >= 20) {
//   console.log('You are older');
// } else if (age >= 20) {
//   console.log('You are younger');
// } else if (age >= 20) {
//   console.log('You are adult');
// } else {
//   console.log('You are child');
// }

// let isRaining = true;
// let isUmbrella = false;

// if (isRaining) {
//   if (isUmbrella) {
//     console.log('You can go out');
//   } else {
//     console.log('You can not go out');
//   }
// } else {
//   console.log('come out next time bring Umbrella');
// }

//Ternary Oprator

// let banana = 12;

// let message =
//   banana <= 11
//     ? 'Bnananas are more than one dozen'
//     : 'Bananas are less than one dozen';
// console.log(message); //Bnananas are more than one dozen

// let ajmal = 'ajmal';
// console.log(ajmal);

// let number = parseInt(prompt('Enter Number'));

// if (number < 0) {
//   console.log('number is negative');
// } else if (number > 0) {
//   console.log('number is positive');
// } else {
//   console.log('number is zero');
// }

let numbers = parseInt(prompt('Enter Any Number'));

if (numbers > 10 && numbers > 20) {
  console.log('number is greater than 10 and 20');
} else {
  console.log('number is not greater than 10 and 20');
}
