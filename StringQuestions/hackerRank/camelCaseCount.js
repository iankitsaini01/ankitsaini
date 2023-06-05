function stringOps(str) {
    const result = str.split(/(?=[A-Z])/);
    return console.log("camelCase:" + result.length)
    
}
stringOps("oneTwoThreeFour")