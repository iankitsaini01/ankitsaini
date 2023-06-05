function addStr(main_string,number,ending) {
    if (number == undefined) {
        number = main_string.length;
    }
    if (ending== undefined) {
        ending = "..."
    }

    return main_string.substring(0, number) + ending ;
    
}
console.log(

addStr("We are doing some exercises.",10,"!!")
)  