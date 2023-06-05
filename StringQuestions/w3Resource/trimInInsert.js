let ins_stringlen;
function stringOps(main_string, ins_string, index) {
    ins_stringlen = ins_string.toString().length;
    if (index == '') {
        main_string = ins_string + main_string.substring(ins_stringlen);
    }
    if (index != '') {
        main_string = main_string.substring(0,index) + ins_string;
    }
    console.log(main_string)
}

stringOps("00000", 123,'1')
stringOps("00000000", 123,'')