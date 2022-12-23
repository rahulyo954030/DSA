let str = "my name is rahul singh"

let s = str.split("")
let star = "*"


for(let i =0; i<s.length; i++){
    if(s[i]=="a" || s[i]=="e" ||s[i]=="i" ||s[i]=="o" ||s[i]=="u"){
        s[i] = star
    }
}
console.log(s.join(""));