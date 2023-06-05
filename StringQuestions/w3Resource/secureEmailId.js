let email = "ankit.Saini90007@gmail.com";
    function hideEmail() {
      let strNew = email.split("@");
      let hideStr = strNew[0].length / 2;
      hideIt = strNew[0].substring(0, hideStr)
      let hiddenEmail = hideIt + "....." + "@" + strNew[1]
      return console.log(hiddenEmail)
    }
    hideEmail(email);
