let strlen = 5;
    let newString = "ankit Saini";
    let strNew;
    let arr ;
    function stringFunction() {
      strNew = newString.split(" ")
      arr = strNew[0] + " " + strNew[1].charAt(0) + "."
      return console.log(arr)
    }
    stringFunction(newString);
