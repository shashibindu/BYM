/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function popItUp() {
  if(!isLoggedIn){
    document.getElementById("popup1").classList.toggle("show");
  }
  else{ 
    document.getElementById("popup2").classList.toggle("show");
  }
}


function putProfile(){
  document.getElementById('username').innerHTML = current_user.username;
  document.getElementById('userid').innerHTML = current_user.userid;  
  document.getElementById('age').innerHTML = current_user.age;
  document.getElementById('mob_no').innerHTML = current_user.mob_no;
  document.getElementById('email').innerHTML = current_user.email;
  document.getElementById('pro-pic').src = "\assets/imgs/pro_pics/"+ current_user.profile_pic;
}

function takeProfile(){
  document.getElementById('username').innerHTML = "";
  document.getElementById('userid').innerHTML = "";  
  document.getElementById('age').innerHTML = "";
  document.getElementById('mob_no').innerHTML = "";
  document.getElementById('email').innerHTML = "";
}