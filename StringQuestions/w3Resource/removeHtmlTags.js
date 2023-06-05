function stringOps(str) {
    let result = str.replace(/<[^>]*>/g,'')
    return result
}
console.log(stringOps("<p><strong><em>PHP Exercises</em></strong></p>"))