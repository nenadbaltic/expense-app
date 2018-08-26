import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// FIREBASE DOES NOT SUPPORT ARRAYS!
// Explanation:
// const notes = [
//     {
//         id: '12',
//         title: 'First note!',
//         body: 'This is my note'
//     },
//     {
//         id: '761ase',
//         title: 'Another note',
//         body: 'This is my note'
//     }
// ];

// const firebaseNotes = {
//     notes: {
//         asdfg: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         hjkl: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// }

// database.ref('notes').set(notes)


// Sa push mi ubacujemo nove objekte u notes koji ce imati random id
// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React, Angular, Python'
// });

// database.ref('notes/-LKgKmADEeFekEcj3MJu').update({
//     body: 'Buy food'
// });

// database.ref('notes/-LKgKmADEeFekEcj3MJu').remove();


// Challenge:
// database.ref('expenses').push({
//     description: 'door2',
//     note: '',
//     amount: 2502,
//     createdAt: 4002
// }).then((ref) => {
//   console.log(ref.key);
// });

// Fetching expenses
// database.ref('expenses')
//     .once('value') 
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses)
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses)
// });
// setTimeout(() => {
//     database.ref('expenses/-LKgP-BjIs3lvRpHrnBo/amount').set(50000);
// }, 5000);

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// SET DATA:
// database.ref().set({
//       name: 'Nenad Baltic',
//       age: 33,
//       stressLevel: 6,
//       job: {
//           title: 'Software developer',
//           company: 'Google'
//       },
//       location: {
//         city: 'Chicago',
//         country: 'United States'
//     }
// })


///////////////////////////////////////////////////////

// CHANGE DATA
// database.ref().set('This is my data.'); -> Override database completely

// database.ref('age').set(34);
// database.ref('location/city').set('Beograd');

// database.ref('attributes').set({
//     height: '1.88m',
//     weight: '84kg'
// }).then(() => {
//     console.log('Second set call worked.')
// }).catch((e) => {
//     console.log('Things didnt for the second error', e)
// })

///////////////////////////////////////////////////////

// REMOVE DATA
// database.ref().remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });

// database.ref('isSingle').set(null);

///////////////////////////////////////////////////////

// UPDATE DATA:
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });


///////////////////////////////////////////////////////

// // FETCHING DATA:
// With .on, if we change data in firebase, we immediately see change in console!

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// Watching changes:
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });
// setTimeout(() => {
//     database.ref('age').set(40);
// }, 5000);

// With off:
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//     database.ref('stressLevel').set(10);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('stressLevel').set(9);
// }, 10500);

// once -> get data a single time
// database.ref('location/country')
//     .once('value') 
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })