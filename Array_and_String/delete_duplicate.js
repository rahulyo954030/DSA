let arr =[4,8,9,2,9,7,6,3]
let em =[]
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]==arr[j]){
            arr.splice(i,1)
        }
    }
}
console.log(arr);

