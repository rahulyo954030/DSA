let arr = [1,2,8,3,8,5,15,20,2,50,0] , k=8

for(let i =0; i<arr.length; i++){
    if(arr[i]==k){
        arr.splice(i,1)
    }
}
console.log(arr);
