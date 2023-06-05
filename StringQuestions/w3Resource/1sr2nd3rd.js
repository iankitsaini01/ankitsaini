let output, number;
        function stringOps(num) {
            number = Number.parseInt(num)
            if (number % 100 > 0 && number % 100 < 4) {
                if (number % 100 == 1) {
                    output = number + "st"
                }
                if (number % 100 == 2) {
                    output = number + "nd"
                }
                if (number % 100 == 3) {
                    output = number + "rd"
                }
            }
            else {
                output = number + "th"
            }

            console.log(output)
        }
        stringOps("0")
        stringOps("1")
        stringOps("2")
        stringOps("3")
        stringOps("4")
        stringOps("404")
        stringOps("101")
        stringOps("203")
        stringOps("302")
