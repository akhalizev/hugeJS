//for each

const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 30, position: 'designer' },
    { name: 'sus', age: 25, position: 'director' },
];

function showPerson(person) {
    console.log(person.position.toUpperCase());
};

//people.forEach(showPerson);

people.forEach((item) => {
    console.log(item.position.toUpperCase());
})