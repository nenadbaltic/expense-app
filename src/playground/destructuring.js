// Object destructuring 
// const person = {
//     name: 'Nenad',
//     age: 33,
//     location: {
//         city: 'Kraljevo',
//         area: 'Cibukovac'
//     }
// }
// const { name, age } = person;
// console.log(name, age);

// const { city, area } = person.location;
// console.log(city, area);

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// // const name = person.name;
// // const age = person.age;
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//     console.log(`It is ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);





// Array destructuring
// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state] = address;
// console.log(`You are in ${city} ${state}`);

// const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
// const [coffee, small, medium, large] = item;

// console.log(`A medium ${coffee} costs ${medium}`);








// Spread Arrays
// let arr = [1, 2, 3];
// let arr2 = [5, 6, 7, 8];
// console.log([...arr, 4, ...arr2]);

// Spread Object
// const user = {
//     name: 'Jen',
//     age: 24
// };

// console.log({
//     ...user,
//     location: 'Philadelphia',
//     age: 27
// });


// const user = {
//     name: 'Jen',
//     age: 24
// };

// const newUser = {
//     location: 'Philadelphia',
//     age: 27
// }

// console.log({
//     ...user,
//     ...newUser
// });