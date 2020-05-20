// const addNum=function(n1,n2){
//     return n1+n2;
// }
const addNum=(n1,n2)=>{
    return n1+n2;
}
console.log(addNum(12,13));

//now easier to use arrow function inside call back 
let people = [
    { name: "Luke", age: 23 },
    { name: "Daniel", age: 42 },
    { name: "Sophie", age: 35 },
    { name: "Alicia", age: 29 }
];
let under30=people.filter(person=>person.age<30);
console.log(under30);
