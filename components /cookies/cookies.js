// variables & literals
const cookieName = "cookie_consent";
const cookieValue = true;
const cookieExpireDays = 30;
const acceptCookieBtn = document.getElementById("acceptBtn");
const customiseBtn = document.getElementById("customise")
const customiseHideBtn = document.getElementById("hideCookie")
// event Listeners
acceptCookieBtn.addEventListener("click",()=>{acceptCookies(cookieName, cookieValue, cookieExpireDays);})
customiseBtn.addEventListener("click",() =>{customiseCookie();});
customiseHideBtn.addEventListener("click",() =>{customiseCookieHide();});
window.addEventListener("load", () => {checkCookie()});
// functions
let acceptCookies = function (cookieName, cookieValue, cookieExpireDays) {
    let currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + 24 * cookieExpireDays * 60 * 60 * 1000);
    let expires = "expires=" + currentDate.toGMTString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";secure;path=/"
    console.log(document.cookie)
    if (document.getElementById("cookie2").checked) {
        document.cookie = "hello" + "=" + "cookie2" + ";"
    }
    
    doNotAskConsent();
}
let askConsent = function () {
    document.getElementById("cookiePopup").style.display = "block"
}
let doNotAskConsent = function (){
    document.getElementById("cookiePopup").style.display = "none"
}

// create a get function to call in checkfunction
let checkCookie = function () {
    (document.cookie.includes(cookieName)) ? doNotAskConsent() : askConsent();
}
let customiseCookie = function() {
    document.getElementById("hiddenCookies").style.display = "block";
}
let customiseCookieHide = function() {
    document.getElementById("hiddenCookies").style.display = "none";
}