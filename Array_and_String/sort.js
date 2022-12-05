let arr = [1,2,8,3,8,5,15,20,2,50,0]

// bubble sort
for(let i = 0 ; i<arr.length; i++){
    for(let j = 0 ; j<arr.length-i-1; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
// console.log(arr);

// selection sort

for(let i = 0 ; i<arr.length; i++){
    for(let j = i+1 ; j<arr.length; j++){
        if(arr[i]>arr[j]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr);