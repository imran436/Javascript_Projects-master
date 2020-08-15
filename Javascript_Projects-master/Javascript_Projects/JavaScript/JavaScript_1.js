function animalFunction(){
    var animalOutput;
    var animals = document.getElementById("animalInput").value;
    var animalStr= " are great aniamls!";
    animals= animals.toLowerCase();
    switch(animals){
        case"dogs":
            animalOutput="Dogs" + animalStr;
        break;
        case"cats":
            animalOutput="Cats" + animalStr;
        break;
        case"birds":
            animalOutput="Birds" + animalStr;
        break;
        case"hamsters":
            animalOutput="Hamsters" + animalStr;
        break;
        case"fish":
            animalOutput="Fish" + animalStr;
        break;
        default:
            animalOutput="please enter a listed animal.";
    }
    document.getElementById("output").innerHTML=animalOutput;
}
function textChange(){
    var a = document.getElementsByClassName("click");
    a[0].innerHTML="text has changed now";
}
var c= document.getElementById("myCanvas");
var ctx= c.getContext("2d");
var myGradiant= ctx.createLinearGradient(0,0,500,0);
myGradiant.addColorStop(0,"blue");
myGradiant.addColorStop(0.5,"white");
myGradiant.addColorStop(1,"lightgreen")
ctx.fillStyle=myGradiant;
ctx.fillRect(0,0,500,350);