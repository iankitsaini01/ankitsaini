function camelCase(params) {
    let firstChar = params.charAt(0).toLowerCase()
    let x = params.split(" ");
    for (let index = 0; index < x.length; index++) {
        x[index] = x[index].charAt(0).toUpperCase() + x[index].substring(1)
    }
    let rs = x.join("");
    let h = rs.charAt(0).toLowerCase() + rs.substring(1)
    console.log(h)
}

camelCase("hello ji x")
camelCase("Hello Ji g")
camelCase("HelloJi Y")