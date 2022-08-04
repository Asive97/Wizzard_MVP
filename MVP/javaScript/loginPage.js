
//validate the login form
       function login() {
    
        let uname = document.getElementById("emis").value;
        let pwd = document.getElementById("password").value;
        let filter = /[0-9]/;
        let form = document.querySelector("form");

        if(uname =='')
        {
          alert("please enter the EMIS number!");
        }
        
        else if(pwd=='')
        {
          alert("please enter your password!");
        }
        
        else if (!filter.test(uname))
        {
          alert("Enter valid EMIS number!");
        }
        
    else if (pwd.length < 6 || pwd.length > 6)
        {
          alert("Password min and max length is 6 characters");
        }
        else
        {
          alert('Thank You for Logging in! You are now bieng Redirected to the home page.');
        }

        window.location.href="../html/homePage.html";
       }

//validate the register form

const form = document.querySelector("form");
eField = form.querySelector(".email");
eInput = eField.querySelector("input");
pField = form.querySelector(".password");
pInput = pField.querySelector("input");


 <head>
    <script>

    /*
       function login()
        { }
        var uname = document.getElementById("email").value;
        var pwd = document.getElementById("password").value;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;
        if(uname =='')
        {alert("please enter")};
        {"}"}
        else if(pwd=='')
        {alert("please enter")};
        {"}"}
        else if(!filter.test(uname))
        {alert("Enter valid email id.")};
        {"}"}
    else if(pwd.length  {"<"} 6 || pwd.length {">"} 6)
        {alert("Password min and max length is 6.")};
        {"}"}
        else
        {alert('Thank You for Login & You are Redirecting to Campuslife Website')};
        //Redirecting to other page or webste code or you can set your own html page.
        window.location = "https://www.campuslife.co.in";
        {"}"}
        {"}"}
        */

        /*
//validation login

const form = document.querySelector("form")
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");



form.onsubmit = (e) => {
  e.preventDefault() //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

}

   setTimeout(
    eField.classList.remove("shake"),
    pField.classList.remove("shake"),500
    ) //remove shake class after 500ms



  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);



  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup


  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }


  function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }


  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }


  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
};
*/

</script>
</head>

