// const bob = 'Bob';
// const susy = 'Susy';

// function greet(name, second) {
//     console.log('hello there, ' + name);    
// }

// greet('matt', susy);

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    if (total > 100) {
        console.log(`You're spending too much!`);
        return total;
    }
    console.log(`You are in a good situation`);
    return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);

console.log({
    gas: gasTotal,
    food: foodTotal
});