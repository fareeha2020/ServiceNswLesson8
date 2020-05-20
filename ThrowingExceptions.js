function add(n1,n2){
    if(isNaN(n1)||isNaN(n2)){
       // throw 
       throw new Error("num1 and num2 must both be numbers");
    }
    return parseFloat(n1)+parseFloat(n2);//wiltage decimals as in "12.51bc it takes 12.5"
}
console.log(add(1,21.2));
