let newStr = "";
        function stringOps(main_string, zero_filled, sign) {
            let mstrlen = main_string.toString().length
            for (let index = 0; index < zero_filled; index++) {
                newStr += '0';
            }
            if (sign == undefined) {
                newStr = newStr.substring(mstrlen) + main_string
            }
            else{

                newStr = sign + newStr.substring(mstrlen) + main_string
            }
            console.log(newStr)
        }
        stringOps(123, 8)