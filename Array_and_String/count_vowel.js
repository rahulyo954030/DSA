let str = "rahulsinghaio"
let vowel = "aeiou"

let count =0
for(let i =0; i<str.length; i++){
    if(str[i]== "a" || str[i]== "e" ||str[i]== "i" ||str[i]== "o" ||str[i]== "u"){
        count++
    }
}
console.log(count);

// or



for(let i =0; i<str.length; i++){
    if(str[i]== "a" || str[i]== "e" ||str[i]== "i" ||str[i]== "o" ||str[i]== "u"){
        count = count+1
    }
}
console.log(count);