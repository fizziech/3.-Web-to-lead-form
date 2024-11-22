let captchaFlag = false;



function beforeSubmit(event){
    if(captchaFlag){

        let outputDate = document.querySelector('.outputDate');
        let inputDate = document.querySelector('.inputDate');
        console.log(inputDate.value);
        
        let formattedDate = new Date(inputDate.value).toLocaleDateString("en-US");
        outputDate.value = formattedDate;
        
    }else{
        alert("Please check recapthcha button.")
        event.preventDefault();
    }
   
}

function timestamp(){
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == ""){
        var elems = JSON.parse(
            document.getElementsByName("captcha_settings")[0].value
        );
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value =
            JSON.stringify(elems);
        } 
    }
setInterval(timestamp, 500); 

function capthchaSuccess(){
    captchaFlag = true;
}