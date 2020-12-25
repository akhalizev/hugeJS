//for each

const people = [
    { name: 'bob', age: 20, position: 'developer', id: 0 },
    { name: 'peter', age: 30, position: 'designer', id: 1 },
    { name: 'sus', age: 25, position: 'director', id: 3 },
];

const person = people.find((person) => {
    return person.id === 3;
})



document.body.innerHTML = `<h4>${person.name}</h4>`