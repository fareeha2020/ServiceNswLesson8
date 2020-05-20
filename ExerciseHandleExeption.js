// Create a function called divide that takes 2 numbers as parameters. The function should divide the first number by the second number and return the result. If the second number is a 0, the function should throw an Error object.
function divide(n1,n2){
    if(n2==0){
        throw new Error("Error cant divide by zero");
    }
    return n1/n2;
}
console.log(divide(12,5));
//console.log(divide(1,0));//error
try{
console.log(divide(1,0));//when it tries this fails and goes to catch
}
catch(e){
    console.log(e.message);

}

// Call the above function inside a try/catch block. You should log the exception message and then continue with the program.