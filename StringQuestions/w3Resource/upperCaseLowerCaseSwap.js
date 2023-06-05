let string = "aAbccCdS";
console.log(string)
let x = string.split("");
for(let i in x){
if(x[i] != x[i].toUpperCase()){
x[i]= x[i].toUpperCase()
}
else{
x[i]= x[i].toLowerCase()
}

}
let res = x.join("")
console.log(res)