document.body.style.background = "#EEE5D8";/*Changes the background colour of the page to the selected colour.*/

function Imglinks() {
  location.href = "https://www.burgerking.co.uk/signup"
}; /*This functions purpose is to redirect users to the kfc signup page when the associated link is pressed.*/

function apple() {
  location.href = "https://apps.apple.com/gb/app/burger-king-uk-ireland/id1062524641"
};/*This functions purpose is to redirect users to the apple appstore page when the associated link is pressed.*/

function windows() {
  location.href = "https://play.google.com/store/apps/detailsid=com.emn8.mobilem8.nativeapp.bkuk&hl=en_GB"
};/*This functions purpose is to redirect users to the windows playstore app page when the associated link is pressed.*/

let more = document.getElementById("more"); /*getElementById scans the body.*/
more.setAttribute("style","padding-top:20px;width:40px;height:30px;padding-left:30px;position:absolute;cursor: pointer;");

let navigationbar = document.getElementById("navigationbar");
navigationbar.setAttribute("style","font-size:18px;font-family:'Secular One',sans-serif;font-weight:bold;display:inline-block;padding-left:80px;padding-top:25px;");

let logo = document.getElementById("logo");
logo.setAttribute("style","position:absolute;display:inline-block;float:right;padding-left:27rem;");

let headerbuttons = document.getElementById("headerbuttons");
headerbuttons.setAttribute("style","font-family:'Cooper Black',Arial,sans-serif;display:inline-flex;float:right;padding-top:25px;padding-right: 20px;height:40px;");

let signup = document.getElementById("signup");
signup.setAttribute("style","background-color: red;border: 3px solid red;border-radius: 50px;text-align:center;")

let splash = document.getElementById("splash");
splash.setAttribute("style","padding-top:64px;padding-bottom:16px;")

let row = document.getElementById("row");
row.setAttribute("style","display: flex;flex-wrap: wrap;padding: 0 4px;padding-left: 20%;padding-bottom: 2rem;cursor: pointer;")

let savemoney = document.getElementById("savemoney");
savemoney.setAttribute("style","display:inline-block;font-size:3.5rem;font-family:'Cooper Black',Arial,sans-serif;font-wheight:bold;color:#371A0A; float:left;padding-right: 15rem;");

let phoneimg = document.getElementById("phoneimg");
phoneimg.setAttribute("style","display: inline-block;margin-left: 40%;padding-right: 4rem;")

let apptos = document.getElementById("apptos");
apptos.setAttribute("style","margin: 32px 0px 0px;font-family: sans-serif;font-size: 14px;")

let footerheading = document.getElementById("footerheading");
footerheading.setAttribute('style','color:white;font-family:"Cooper Black",Arial,sans-serif;');

let footerheading2 = document.getElementById("footerheading2");
footerheading2.setAttribute('style','color:white;font-family:"Cooper Black",Arial,sans-serif;');
/*CSS type Styling*/