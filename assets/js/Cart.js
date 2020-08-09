var cart = [];
var temp_ticket = null;
var sub_total = 0;

function addToCart(i){
    if(isLoggedIn){
        temp_ticket = tickets_data.t[i];
        alert("ticket is added to the cart!");
        cart.push(temp_ticket);
    
        sub_total += parseInt(temp_ticket.cost);
        document.getElementById('sub-total').innerHTML = sub_total;
    }
    else{
        alert("please, login first!")
    }
}

function openCart(){
    if(isLoggedIn){
        document.getElementById("popup3").classList.toggle("show");
    }
    else{
        alert("please, login first!")        
    }
}