// 1. Map through the array and console.log everyone's first and last name. Using .map
let users = [
    {
    firstName: 'Joe',
    lastName: 'Orin',
    car: 'Porsche',
    dog:'Shitzu',
    },

    {
    firstName: 'Lori',
    lastName:"Foster",
    car: 'Porsche',
    dog:'German Shepherd'
    },

    {
    firstName: 'Guy',
    lastName:'Peters',
    car: 'Chevrolet',
    dog:'Poodle'
    },

    {
    firstName: 'Lori',
    lastName:'Foster',
    car: 'Toyota',
    dog:'German Shepard'
    }
];

// 1. Answer(Implicitly):
// let fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);

// 1. Answer(Explicitly):
let fullNames = users.map((user) => {
    return `${user.firstName} ${user.lastName}`;
});

console.log(fullNames);