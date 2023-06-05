function ath(str) {
    let arr = str.split("")
    let output = [];
    for (let index = 0; index < arr.length; index++) {
        let hex = Number(arr[index].charCodeAt()).toString(16)
        output.push(hex);
    }
    let newOut = output.join("")
    console.log(newOut)
}
let str = "12"
ath(str)