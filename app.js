// function greetMorning(name) {
//     const myName = 'john';
//     console.log(`Good morning ${name}, my name is ${myName}`);
// }

// function greetAfternoon(name) {
//     const myName = 'john';
//     console.log(`Good afternoon ${name}, my name is ${myName}`);
// }
function morning(name) {
    console.log();
    return `Good morning ${name.toUpperCase()}`;
}

function greet(name, cb) {
    //cb(name);
    const myName = 'john';
    console.log(`${cb(name)}, my name is ${myName}`);
}

greet('peter', morning);
greet('bob', morning);
// const bob = 'Bob';
// const susy = 'Susy';

// function greet(name, second) {
//     console.log('hello there, ' + name);    
// }

// greet('matt', susy);

// const gas = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++){
//         total += arr[i];
//     }
//     if (total > 100) {
//         console.log(`You're spending too much!`);
//         return total;
//     }
//     console.log(`You are in a good situation`);
//     return total;
// }

// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);

// console.log({
//     gas: gasTotal,
//     food: foodTotal
// });