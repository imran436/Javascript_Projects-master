
const animal={kingdom:"mammal", species:"doggo", breed:"corgi"};
function callLoop(){
    var x=0;
    var y="0123456789"
    var z = y.length;
    while(x <= z){
        document.getElementById("loop").innerHTML= document.getElementById("loop").innerHTML + (x + "<br>");

        x++;
    }
}

function forLoop(){
    var a;
    var b=["Guitar","Drums","trumpet","Piano","Bass","Violin","Flute"];
    var c = " ";
    for(a=0; a<b.length; a++){
        c= c+ b[a] +"<br>";
    }
    document.getElementById("listOfInst").innerHTML=c;
}
function arrayFunction(){
    var doggos=["sleeping","playing","eating","using the bathroom"];
    document.getElementById("Array").innerHTML=doggos[2];
}
function constFunction(){
    
    return  "hello " + animal.breed;
}
document.write(constFunction());
var t=10;
{
    let t= 7
    var p = document.all()
    document.write(p+ t)
}
document.write(p+ t)
{
let car={
    make: "Acura ",
    model:"NSX",
    year: "2020 ",
    color: "black ",
    description : function(){
         return "The car is a " + this.year + this.color + this.make +this.model;
    }
};
function myWriteFunction(){
    document.getElementById("car").innerHTML = car.description();
}
}
var text="";
var i=0;
for(i=0; i <20; i++){

    if(i == 11){break;}
    if(i == 1 || i==3 || i==5 || i==7||i==9){continue;}
    text = text +"the number is " + i +"<br>";
}
document.getElementById("breakAndCont").innerHTML=text;