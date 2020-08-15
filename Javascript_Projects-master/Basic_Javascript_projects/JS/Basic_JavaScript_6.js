function rideFunction(){
    var Height, canRide;
    Height=document.getElementById("Height").value;
    canRide = (Height < 52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = canRide +" to ride.";
}
function ofVotingAge(){
    var age,canVote;
    age =document.getElementById("age").value;
    canVote= (age < 18)?"You are not old enough to vote.":"You can vote!";
    document.getElementById("vote").innerHTML = canVote;
}
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack = new Vehicle("dodge","Viper",2020,"Red");
var Emily= new Vehicle("Jeep","Trail-Hawk",2019,"White and Black");
var Erik= new Vehicle("Ford","Pinto","1971","Mustard");
function myFunction(){
    document.getElementById("Key_Words_And_Constructors").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color +"-Colored " + Erik.Vehicle_Model + " Manufactured in " +Erik.Vehicle_Year;
}

function Employee(Name, Age, Job){
    this.Employee_Name=Name;
    this.Employee_Age=Age;
    this.Employee_Job=Job;
}
var john = new Employee("John Thomas",21,"Barista");
function getEmployee(){
    document.getElementById("New_and_This").innerHTML=
    john.Employee_Name + " is a "  +john.Employee_Age+" year old " + john.Employee_Job +".";
}
var alert = "Hello";
document.write(alert);
function nestFunction(){
    document.getElementById("Nested_Function").innerHTML= count();
    function count(){
        var startNum=1;
        function plusOne(){
            startNum += 1;      
        }
        plusOne();
        return startNum;
    }
}