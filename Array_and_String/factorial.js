//<---------------------Using Loop------------------------------>
let num = 8
let sum = 1
for(let i =1; i<=num; i++){
    sum = sum *i
}
console.log(sum);
//<---------------------Using Loop------------------------------>

//<---------------------Recursion------------------------------>
function factorial(num){
    if(num<=1){
        return 1
    }
    return num * factorial(num-1)
}
console.log(factorial(8));
//<---------------------Recursion------------------------------>