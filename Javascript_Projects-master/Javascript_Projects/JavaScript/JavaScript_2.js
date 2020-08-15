function validateForm(){
    
    for(i=0; i<(document.forms["myForm"].length -1); i++){
        var x = document.forms["myForm"][i].value;
        if(x == ""){
            alert("Please fill out the entire form");
            return false;
        }

    }
}
/*function test(){
    var txt="";
    for(i=0; i<(document.forms["myForm"].length -1); i++){
        var x = document.forms["myForm"][i].value;
        txt= txt + x +"<br>"
    }
    document.write(txt);
}*/