let pets = [
    {
        name: "Rex",
        age: 4,
        ownerName: "Luke"
    }, {
        name: "Spot",
        age: 7,
        ownerName: "Jade"
    }, {
        name: "Scooby",
        age: 3,
        ownerName: "Shaggy"
    }, {
        name: "Lucky",
        age: 1,
        ownerName: "Luke"
    }, {
        name: "Sadie",
        age: 3,
        ownerName: "Daniel"
    }, {
        name: "Duke",
        age: 5,
        ownerName: "Sabine"
    }
];

// 1 Use the Array.filter function to create an array of all the pets owned by Luke.

const ownedByLuke= pets.filter((pet) => pet.ownerName == "Luke");
 console.log(ownedByLuke);

// 2 Use the Array.map function to create an array of all the names of the owners.

// function getOwner(pet){
//     return pet.ownerName;
// }
// let owners = pets.map(getOwner);

const getOwner=pets.map((pet)=>pet.ownerName);
 console.log(getOwner);

// 3 Use the Array.find function to retrieve the pet owned by Shaggy
// function findShaggysPet(pet) {
//     return pet.ownerName == "Shaggy";
// }

const shaggysPet = pets.find((pet)=>pet.ownerName=="Shaggy");
console.log(shaggysPet);

// 4 Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name that starts with "S"

// function filterCallback(pet){
//     let lessThan5 = pet.age < 5;
//     let hasS = pet.name[0] == "S" || pet.ownerName[0] == "S";
//     return lessThan5 && hasS;
// }

const filteredPets = pets.filter((pet)=>
    pet.age < 5 && (pet.name[0] == "S" || pet.ownerName[0] == "S"));

console.log(filteredPets);



