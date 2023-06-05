function stringOps(string) {
    let string_lowerCase = string.toLocaleLowerCase();
    let string_plain = string_lowerCase.replace(/[`~!@#$%^&*()_+-={}:";'<>,.?|]/g,'');
    let string_split = string_plain.split(" ");
    let string_join = string_split.join("");
    let string_set = new Set(string_join)
    let string_set_length = string_set.size
   return (string_set_length == 26)? true : false
 }
 console.log(stringOps(""))