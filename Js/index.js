const contentList = document.querySelectorAll(".contents");
const buttonList = document.querySelectorAll(".number-items button");
const form = document.querySelector("#the-form");
const navigationBtn = document.querySelectorAll(".button-section a");
const theSwitch = document.getElementById("theSwitch-Btn");
const theSwitchCont = document.getElementById("switch-cont");
const month = document.querySelectorAll(".month");
const year = document.querySelectorAll(".year");
const theBox = document.querySelectorAll(".plan-box");
const pickOns = document.querySelectorAll(".pick-on-year");
const pickOns2 = document.querySelectorAll(".pick-on-month");
const finalMonth = document.querySelectorAll(".confirm-month");
const finalYear = document.querySelectorAll(".final");

contentList[0].style.display = "flex";
contentList[1].style.display = "none";
contentList[2].style.display = "none";
contentList[3].style.display = "none";
contentList[4].style.display = "none";
buttonList[0].classList.add("buttonFocus");


const theName = document.getElementById("name");
const theEmail = document.getElementById("email");
const theNumber = document.getElementById("number");

const isRequired = value => value === ''? false : true;
const validEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
}
const validName = (name) =>{
    const testName =  /^[a-zA-Z][a-zA-Z ]*$/;
    return testName.test(name)
}

const showError = (element,message) => {
    const theInput = element.parentElement;
    theInput.classList.add("error");
    theInput.classList.remove("success")

    const theMessage = theInput.querySelector("small")
    theMessage.innerHTML = message;
}
const showSuccess =(element)=>{
    const theInput = element.parentElement;
    theInput.classList.add("Success");
    theInput.classList.remove("error");

    const theMessage = theInput.querySelector("small");
    theMessage.innerHTML = "";
}

const validateName = () => {
    let valid = false;
    const nameValue = theName.value.trim();
    if(!isRequired(nameValue)){
        showError(theName , "This field is required")
    }else if(!validName(nameValue)){
        showError(theName, "Input valid name")
    }else{
        showSuccess(theName);
        valid = true;
    }
    return valid;
}

const validateEmail = () => {
    let valid = false;
    const emailValue = theEmail.value.trim();
    if(!isRequired(emailValue)){
        showError(theEmail, "This field is required");
    }else if(!validEmail(emailValue)){
        showError(theEmail, "Input valid email");
    }else{
        showSuccess(theEmail);
        valid= true;
    }
    return valid;
}

const validateNumber = ()=> {
    let valid = false;
    const numberValue = theNumber.value.trim();
    if(!isRequired(numberValue)){
        showError(theNumber, "This field is required");
    }else if(isNaN(numberValue)){
        showError(theNumber, "Input only numbers");
    }else{
        showSuccess(theNumber);
        valid = true;
    }
    return valid;
}

function Next1(){
    let isValidName = validateName();
    let isValidEmail = validateEmail();
    let isValidNumber = validateNumber(); 

    let isFormValid = isValidName && isValidEmail && isValidNumber 
    if(isFormValid){
        contentList[0].style.display = "none";
        contentList[1].style.display = "flex";
        buttonList[0].classList.remove("buttonFocus");
        buttonList[1].classList.add("buttonFocus");
        
    }else{
        console.log("Hello")
    }
  
}

theSwitchCont.addEventListener("click", toggleBtn)
function toggleBtn(){
      theSwitch.classList.toggle("switch");
      for(i=0 ; i < month.length ; i++){
        month[i].classList.toggle("showMonth")
      }
      for(i=0 ; i < year.length ; i++){
        year[i].classList.toggle("showYear")
      }
      for(i=0 ; i < theBox.length ; i++){
        theBox[i].classList.toggle("showYear")
      }
      for(i=0 ; i < pickOns.length ; i++){
        pickOns[i].classList.toggle("pick-on-year");
      }
      for(i=0 ; i < pickOns2.length ; i++){
        pickOns2[i].classList.toggle("pick-display");
      }
      for(i=0 ; i < finalMonth.length ; i++){
        finalMonth[i].classList.toggle("final-display");
      }
      for(i=0 ; i < finalYear.length ; i++){
        finalYear[i].classList.toggle("final");
      }
}

function Next2(){
    contentList[1].style.display = "none";
    contentList[2].style.display = "flex";
    buttonList[1].classList.remove("buttonFocus");
    buttonList[2].classList.add("buttonFocus"); 
}
function Next3(){
    contentList[2].style.display = "none";
    contentList[3].style.display = "flex";
    buttonList[2].classList.remove("buttonFocus");
    buttonList[3].classList.add("buttonFocus"); 
}
function Confirm(){
    contentList[3].style.display = "none";
    contentList[4].style.display = "flex";
    buttonList[3].classList.add("buttonFocus"); 
}
function Goback1(){
    contentList[0].style.display = "flex";
    contentList[1].style.display = "none";
    buttonList[0].classList.add("buttonFocus");
    buttonList[1].classList.remove("buttonFocus");
}
function Goback2(){
    contentList[1].style.display = "flex";
    contentList[2].style.display = "none";
    buttonList[1].classList.add("buttonFocus");
    buttonList[2].classList.remove("buttonFocus");
}
function Goback3(){
    contentList[2].style.display = "flex";
    contentList[3].style.display = "none";
    buttonList[2].classList.add("buttonFocus");
    buttonList[3].classList.remove("buttonFocus");
}
