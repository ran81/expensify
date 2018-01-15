// ================ Object Destructuring ==============
// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };

// // Same as the syntax for named exports - the {} 
// // doesn't mean an object.. in the export statement it's 
// // not an object as well.
// const { name, age } = person;
// console.log(`${name} is ${age}`);

// const { city, temp } = person.location;
// console.log(`It's ${temp} in ${city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// ================ Array Destructuring ==============
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , mediumPrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);
