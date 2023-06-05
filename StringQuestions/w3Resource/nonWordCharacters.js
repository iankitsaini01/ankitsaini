function stringOps(str) {
    let strr = str.replace(/[~!@#$%^&*()_+`=|{}';:<>?\\/\][\.," "]/g, '')
    return strr
}
console.log(stringOps('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL')
)