function logOut(){
    current_user = null;
    isLoggedIn = false;
    document.getElementById("popup2").classList.toggle("show");
    alert("you're now logged out!!");
    takeProfile();
    cleanForm();
}