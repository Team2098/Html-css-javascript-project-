function validate() {
  var firstname = document.querySelector("#firstName");
  var lastname = document.getElementById("lastName");
  var username = document.getElementById("userName");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var password = document.getElementById("password");
  var cnfpassword = document.getElementById("cnfPassword");

  var regex = /^[A-Za-z]+$/;

  var invalidF = regex.test(firstname.value);
  var invalidL = regex.test(lastname.value);
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneno = /^\d{10}$/;

  if (firstname.value.trim() == "") {
    alert("first Name input field cannot be empty");
    firstname.style.borderBottom = "solid 2px red";
    return false;
  }
  if (!invalidF) {
    alert("Invalid First Name");
    firstname.style.borderBottom = "solid 2px red";
    return false;
  }
  if (lastname.value.trim() == "") {
    alert("last Name input field cannot be empty");
    lastname.style.borderBottom = "solid 2px red";
    return false;
  }
  if (!invalidL) {
    alert("Invalid Last Name");
    lastname.style.borderBottom = "solid 2px red";
    return false;
  }
  if (username.value.trim() == "") {
    alert("username input field cannot be empty");
    username.style.borderBottom = " solid 2px red";
    return false;
  }
  if (email.value.trim() == "") {
    alert("email input field cannot be empty");
    email.style.border = "solid 2px red";
    return false;
  }
  if (!email.value.match(mailformat)) {
    alert("Invalid Email");
    email.style.borderBottom = "solid 2px red";
    return false;
  }
  if (phone.value.trim() == "") {
    alert("Phone No. input field cannot be empty");
    phone.style.borderBottom = "solid 2px red";
    return false;
  }
  if (!phone.value.match(phoneno)) {
    alert("Phone No. is Invalid");
    phone.style.borderBottom = "solid 2px red";
    return false;
  }
  if (password.value.trim() == "") {
    alert("password input field cannot be empty");
    password.style.borderBottom = "solid 2px red";
    return false;
  }
  if (cnfpassword.value.trim() == "") {
    alert("confirm Password input field cannot be empty");
    cnfpassword.style.borderBottom = "solid 2px red";
    return false;
  } 
  if(password.value!=cnfpassword.value)
  {
    alert("password did not match");
    password.style.borderBottom= "solid 2px red";
    cnfpassword.style.borderBottom= "solid 2px red";
    return false;
  }
  else {
    return true;
  }
}

function password(){
  var x = document.getElementById("password");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");
  

  if(x.type === 'password')
  {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  }
  else{
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }


}

function cnfPassword(){
  var x = document.getElementById("cnfPassword");
  var y = document.getElementById("hide3");
  var z = document.getElementById("hide4");

  if(x.type === 'password')
  {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  }
  else{
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}
