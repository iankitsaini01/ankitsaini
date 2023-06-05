 function cap() {
            var input, arr, capStr;
            finalStr = "";
            input = document.getElementById("inputString");
            arr = input.value.toLowerCase().split(" ");
            for (let i = 0; i < arr.length; i++) {
                capStr = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
                finalStr = finalStr + " " + capStr;
            }
            return document.getElementById("string").innerHTML = finalStr;
        }

        function low() {
            input = document.getElementById("inputString");
            arr = input.value.toLowerCase()
            return document.getElementById("stringlow").innerHTML = arr;
        }
        function upr() {
            input = document.getElementById("inputString");
            arr = input.value.toUpperCase()
            return document.getElementById("stringup").innerHTML = arr;
        }
        function cout() {
            input = document.getElementById("inputString");
            arr = input.value.length
            if(arr==''){
                return document.getElementById("stringcout").innerHTML = "";
            }
            return document.getElementById("stringcout").innerHTML = arr;
        }
        function wcout() {
            input = document.getElementById("inputString");
            arr = input.value.split(" ").length
            arrr = input.value.split(" ")
            if(arrr[0]==''){
                return document.getElementById("stringwcout").innerHTML = "";
            }
            return document.getElementById("stringwcout").innerHTML = arr;
        }

