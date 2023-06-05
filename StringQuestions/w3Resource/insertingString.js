function addStr(main_string,ins_string,number) {
    if (number == undefined) {
        number =0;
    }
    if (ins_string== undefined) {
        ins_string = ""
    }

    return main_string.substring(0, number) + ins_string + main_string.substring(number);
    
}
console.log(

addStr("We are doing some exercises.", "k", 10)
)  