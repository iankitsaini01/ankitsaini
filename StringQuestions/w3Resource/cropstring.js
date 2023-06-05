let strlen = 5;
    let newString = "ankitIsHere";
    let strNew;
    function stringFunction() {
      strNew = newString.slice(0, strlen)
      return console.log(strNew)
    }
    stringFunction(newString, strlen);
