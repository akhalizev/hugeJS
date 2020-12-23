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
    return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);

console.log({
    gas: gasTotal,
    food: foodTotal
});