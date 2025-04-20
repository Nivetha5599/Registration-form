function validateForm() {
    var nam = document.getElementById("nam");
    var email = document.getElementById("email");
    var pwd = document.getElementById("pwd");
    var subbtn = document.getElementById("subbtn");
    var namval = nam.value;
    var mailval = email.value;
    var pwdval = pwd.value;
    if (namval === "") {
        alert("Please enter name!!")
       return false;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!mailval.match(emailPattern)) {
        alert("Please enter valid mail!!")
        return false;
    }
    if (pwdval.length < 6) {
        alert("Password is too short!!")
        return false;
    }
    alert("Form submitted!");
    subbtn.disabled = false;
}