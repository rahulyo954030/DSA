const users = [
    {firstName : "Ravi", lastName : "Kumar", age : 34},
    {firstName : "Praveen", lastName : "Raj", age : 28},
    {firstName : "ramesh", lastName : "Rao", age : 40},
    {firstName : "Ranga", lastName : "Ram", age : 34},
    {firstName : "chandan", lastName : "Arya", age : 44},
    {firstName : "pavan", lastName : "Raj", age : 15},
    {firstName : "Sanjay", lastName : "Advani", age : 55},
    {firstName : "Nandan", lastName : "Char", age : 34},
]
// find the particular age  group, for how many times it is repeated in the given question
// { 34 : 3, 28 : 1, 40 : 1,44 : 1, 15 :1, 55 : 1}



let obj ={}
for(let i =0; i<users.length; i++){
    if(obj[users[i].age]==undefined){
        obj[users[i].age]=1
    }
   else {
    obj[users[i].age]++
    }

}
console.log(obj);