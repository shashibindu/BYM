function doit(i){
    if(document.getElementById('open_card'+i).style.display != "block"){
            document.getElementById('open_card'+i).style.display = "block";
        }
    else{
        document.getElementById('open_card'+i).style.display = "none";
    }
}


for(let i=0; i<=tickets_data.t.length-1; i++){
    if(document.getElementById('details_text'+i)){
        document.getElementById('details_text'+i).innerHTML = tickets_data.t[i].movie_name;
    }
    if(document.getElementById('details_text0'+i)){
        document.getElementById('details_text0'+i).innerHTML = tickets_data.t[i].cost;
    }
}
