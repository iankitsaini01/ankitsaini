function stringOps(main_string, endswith) {
    let  newStr = main_string.split(" ")
    if(newStr.includes(endswith) > -1 ){
       console.log("matched")
    }
    else{
       console.log("not matched")

    }
    
   }
   stringOps("hello ji","Ji")