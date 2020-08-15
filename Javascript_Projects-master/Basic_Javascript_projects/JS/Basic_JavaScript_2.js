function myFunction(){
    var p = document.getElementById("1stP").innerHTML;
    var result = p.fontcolor("blue");
    document.getElementById("1stP").innerHTML= result;
}
function mySecondFunction(){
    var a ="Hello";
    a += ", How are you today?"
    document.getElementById("concatenate").innerHTML =a

}