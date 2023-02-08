//Replace all the `var`s with `let` and `const`. 
//Alter the code however necessary to make sure this 
    //continues to work (so the pet's name **isn't** `"John"`, 
    //but instead `"spot"` is returned). 
    //You only need to delete `var` and insert `let` and `const`

//John is the pet owner, and his name should be stored differently than the other names.
//code given:
// var name = "John"
// var age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         var pet = { type: pets[i] }
//         var name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])


//solution
// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])



//
//Re-write this `.map()` using an arrow function:
//Be aware that if JavaScript sees a `{` directly after the `=>` 
//it will think it's starting a function, and not starting an object, 
//so the `:` will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

//     console.log(mapVegetables)

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly= (arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

// const filterForFriendly = arr =>
// arr.filter(person => person.friendly);

// console.log(filterForFriendly)

//Re-write the following functions to be arrow functions:
// function doMathSum(a, b) {
//     return a + b
// }
// const add = (a,b) => a + b
// console.log(add)

// var produceProduct = function(a, b) {
//     return a * b
// }
// var produceProduct = (a, b) => a * b

// // const user = [{
// //     firstName: "Mary",
// //     lastName: "Finn",
// //     age: 37
// // }]

// // const printString = (firstName, lastName, age) =>
// // `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

// // console.log(printString)

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
// //  function filterForDogs(arr) {
// //      return arr.filter(animal => {
// //          if (animal.type === "dog") {
// //              return true
// //          } else {
// //              return false
// //          }
// //      })
// //  }

// const result = animals.filter(animal => animal.type === 'dog')
// console.log(result)
 

const guest = [{
    firstName: "janice",
    location: "hawaii"
}]

function welcomeMessage(location, name) {
  return `Hi ${name}!

Welcome to ${location}.

I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;
}