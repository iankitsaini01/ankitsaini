function stringOps(main_string, endswith) {
    let  newStr = main_string.split(" ")
    if(newStr[newStr.length -1]){
       console.log("true")
    }
    else{
       console.log("false")
    }
   }
   stringOps("hello ankit", "ankit")