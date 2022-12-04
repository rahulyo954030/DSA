let arr = [1,2,8,3,8,5,15,20,2,50]

let max = -Infinity

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
    if(arr[i]>arr[j]){
        max = arr[i]
    }
}
}

console.log(max);