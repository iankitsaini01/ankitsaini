let result ="";
        function stringOps(main_string, split_On, after_before) {
            if (after_before == 'a') {
                indexof = main_string.indexOf(split_On)
                result = main_string.substring(0,indexof)
            }
            if (after_before == 'b') {
                indexof = main_string.indexOf(split_On) + 1
                result = main_string.substr(indexof)
            }
            console.log(result)
        }
        stringOps('w3resource: JavaScript Exercises', 'E', 'b')