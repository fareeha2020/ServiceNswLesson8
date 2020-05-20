// 1 Convert this function to an arrow function
// function multiplyNumbers(num1, num2) {
//     return num1 * num2;
// }
const multiplyNumbers=(n1,n2)=>n1*n2;
console.log(multiplyNumbers(10,12));

// 2 Convert this function to an arrow function
// function personOver40(person) {
//     return person.age > 40;}
let people = [
    { fname: "Luke",lname:"parker", age: 23 },
    { fname: "Daniel",lname:"parker" , age: 42 },
    { fname: "Sophie",lname:"parker", age: 35 },
    { fname: "Alicia",lname:"parker", age: 29 }
];
const personOver40=people.filter( (person) => person.age > 40);
console.log(personOver40);


// 3 Convert this function to an arrow function
// function getFullName(person) {
//     return `${person.firstName} ${person.lastName}`;
// }
const getFullName=people.map((x) =>`the full name is ${x.fname} ${x.lname}`);
console.log(getFullName);

// 4 Convert this function to an arrow function
// function getPersonTitle(person) {
//     if (person.preferedTitle) {
//         return person.preferedTitle;
//     } else if (person.gender == "male") {
//         return "Mr.";
//     } else if (person.gender == "female") {
//         if (person.maritalStatus == "married") {
//             return "Mrs.";
//         } else if (person.maritalStatus == "unmarried") {
//             return "Miss";
//         } else {
//             return "Ms."
//         }
//     } else {
//         return "Mx."
//     }
// }//for multiline just put whole body in return
let person={
    fname:"luke",
    lname:"parker",
    age:23,

}
const getPersonTitle= (person) => {
        if (person.preferedTitle) {
            return person.preferedTitle;
        } else if (person.gender == "male") {
            return "Mr.";
        } else if (person.gender == "female") {
            if (person.maritalStatus == "married") {
                return "Mrs.";
            } else if (person.maritalStatus == "unmarried") {
                return "Miss";
            } else {
                return "Ms."
            }
        } else {
            return "Mx."
        }
    }//just check by adding properties
   // person.gender="female";
   person.preferedTitle="i am Mister";
  // person.maritialStatus="married";
 
    console.log(getPersonTitle(person));
 

