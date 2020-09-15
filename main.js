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

// Definitely prefer implicit functions when possible, but doing both for practice
// 1. Answer(Implicitly):
let fullNamesImp = users.map((user) => `${user.firstName} ${user.lastName}`);

// 1. Answer(Explicitly):
let fullNamesExp = users.map((user) => {
    return `${user.firstName} ${user.lastName}`;
});

console.log(fullNamesImp);
console.log(fullNamesExp);

// 2a. Create an array of objects where the value from the name key in each object in users is the 
//     key in the new object index and the likes value is the value in the new object index.
//  b. Calculate age based on the number of letters in the name multiplied by 10
const users2 = [
    { name: 'pan', likes: 'lasagne' },
    { name: 'lena', likes: 'wine' },
    { name: 'jill', likes: 'tacos' },
    { name: 'conner', likes: 'turkey' }
];

let people = users2.map((user) => {
    let age = user.name.length * 10;
    return {[user.name]:user.likes, age : age};
});

console.log(people)

// Should look like:
// [
//     { pan: 'lasagne', age: 30 },
//     { lena: 'wine', age: 40 },
//     { jill: 'tacos', age: 40 },
//     { conner: 'turkey', age: 60 }
// ]


