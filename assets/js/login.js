var current_user = null;
var isLoggedIn = false;

function logIn(form){
var entered_Username = form.Username.value;
var entered_Password = form.Password.value;

for(let i=0; i<=users_data.u.length-1; i++){
    if(entered_Username==users_data.u[i].username)
    {
        if(entered_Password==users_data.u[i].password){
            current_user = users_data.u[i];
            isLoggedIn = true;
            putProfile();
            document.getElementById("popup1").classList.toggle("show");
            alert("you're now logged in!!");
            break;
        }
        else{
            alert("Username or Password was incorrect");
            break;
        }
    }
    else
    {
        if(i==users_data.u.legth-1){
            alert("Username or Password was incorrect");
            break;
        }
        else{
            continue;
        }
    }
}//loop

}//fn

function eye(){
    var passeye = document.getElementById("pass-eye");
    var eyeicon = document.getElementById("eye-icon");
    if(passeye.type == "password"){
        passeye.type = "text";
        eyeicon.src = "assets/imgs/close.png";
    }
    else{
        passeye.type = "password";
        eyeicon.src = "assets/imgs/open.png";
    }
}

function cleanForm(){
    document.getElementById('usrnm').value = "";
    document.getElementById('pswrd').value = "";
}