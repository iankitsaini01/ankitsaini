let newStr = "";
        function stringOps(main_string, str_index) {
            if (str_index != undefined) {
                for (let index = 0; index < str_index; index++) {
                    newStr += main_string
                }
                console.log(newStr)
            }
            else {
                console.log("Error in string or count.")
            }
        }
        stringOps('a')