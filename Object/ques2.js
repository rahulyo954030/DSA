// Lucky number

let arr = [1, 2, 2, 3,3,4,5,5,5,5,5 ]

let obj ={}

for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }
    else{
        obj[arr[i]]++
    }
}

let max = -1
for(let key in obj){
    if(obj[key]==key && obj[key]>max){
        max = obj[key]
    }
    
}
console.log(max);
