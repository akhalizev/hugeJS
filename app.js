//for each

const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 30, position: 'designer' },
    { name: 'sus', age: 25, position: 'director' },
];

// function showPerson(person) {
//     console.log(person.position.toUpperCase());
// };

//people.forEach(showPerson);

// people.forEach((item) => {
//     console.log(item.position.toUpperCase());
// })

//map

// const ages = people.map(function (person) {
//     return person.age;
// });

// const newPeople = people.map((person) => {
//     return {
//         firstName: person.name.toUpperCase(),
//         oldAge: person.age + 20,
//     }
// });

// const names = people.map((person) => {
//     return `<h1>${person.name}</h1>`
// })

// console.log(ages);
// console.log(newPeople);

// document.body.innerHTML = names.join('');
// console.log(names);

const youngPeople = people.filter((person) => {
    return person.age < 26;
});


console.log(youngPeople);
//document.body.innerHTML = `<h2>${young}</h2>`;//

const developers = people.filter((person) => {
    return person.position === 'developer';
});

console.log(developers);