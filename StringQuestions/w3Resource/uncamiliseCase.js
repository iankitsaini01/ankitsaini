function unc(params,replace) {           
    let newString = params.split(/(?=[A-Z])/)
    for (let index = 0; index < newString.length; index++) {
        newString[index] = newString[index].toLowerCase();
    }
    let result = newString.join(replace)
    console.log(result)
}
unc("helloWord","-")
unc("helloWord","___")
