function myfunction(){
    var x=document.getElementById("pass");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length")

    if(password.value.length >= 10){
        alert("Login Succesful");
        window.location.replace("newpage.html")
        return false;

    }
    else{
        alert ("Login Failed has to be more than 10 letters.")
    }
}
