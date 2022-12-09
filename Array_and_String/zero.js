let arr =[4,5,8,1,0,9,0,3]

// output = [4,5,8,1,9,3,0,0]
let count =0
for(let i =0; i<arr.length; i++){
   if(arr[i]==0){
    count++
    arr.splice(i,1)
   }
}

for(let j =0; j<count; j++){
    arr.push(0)
 }


console.log(arr);