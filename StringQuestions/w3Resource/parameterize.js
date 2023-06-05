
    let string = "Robin Singh from USA."
    let newString = string.toLowerCase()
    if (newString[newString.length - 1] == ".") {
      newString = newString.substring(0, newString.length - 1);
    }
let here =    newString.split(" ").join("-")
console.log(here)