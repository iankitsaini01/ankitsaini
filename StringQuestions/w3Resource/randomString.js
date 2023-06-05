function stringOps(len) {
    let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let baselen = base.length;
    let randm =[];
    let length = len || 32
    for (let index = 0; index <length; index++) {
     randm[index] = base.charAt(Math.random()*baselen)
        
    }
  let result =  randm.join("")
    console.log(result)
}
stringOps()