let str = "catac"

let rev = str.split("").reverse().join("")

if(str == rev){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}
