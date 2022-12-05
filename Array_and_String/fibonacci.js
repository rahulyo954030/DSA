//<---------------------Using Loop------------------------------>
function fibonacci(num){
    
    let first =0, second = 1, next;
    for(let i =1; i<num; i++){
        next = first+second
        first =second
        second = next
    }
    return second
}
console.log(fibonacci(8))
//<---------------------Using Loop------------------------------>

//<---------------------Recursion------------------------------>
function fibonacci_recursion(num){
    if(num<=1){
        return num
    }
    return fibonacci(num-2)+ fibonacci(num-1) 
}
console.log(fibonacci_recursion(15))
//<---------------------Recursion------------------------------>