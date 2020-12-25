//for each

const people = [
    { name: 'bob', age: 20, position: 'developer', id: 0, salary: 200 },
    { name: 'peter', age: 30, position: 'designer', id: 1, salary: 300 },
    { name: 'sus', age: 25, position: 'director', id:2, salary: 500 },
];

const total = people.reduce(function (acc, currItem) {
    console.log(`total ${acc}`);
    console.log(`current money ${currItem.salary}`);
    acc += currItem.salary;

    return acc
},0);

console.log(total);

//FIND
// const person = people.find((person) => {
//     return person.id === 3;
// })



// document.body.innerHTML = `<h4>${person.name}</h4>`
