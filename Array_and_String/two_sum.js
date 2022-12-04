let arr = [1,2,8,3,8,5], k = 10

let flag =false
for(let i =0; i<arr.length; i++){
    for(let j =i+1; j<arr.length; j++){
        if(arr[i]+arr[j]==k){
            flag = true
        }
    }
}

console.log(flag);