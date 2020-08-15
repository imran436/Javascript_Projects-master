var x =10;
function add10(){
    document.write((x+10) + "<br>");
}
function oneHundred(){
    var y=2;
    document.write((y+100) +"<br>");
}
function badFunc(){
    document.write(y + 30);
}
add10();
oneHundred();
badFunc();
function greeting(){
    time = new Date().getHours();
    var a = document.getElementById("msg").innerHTML;
    if(time < 12){
        a = a + " morning!";
    }
    else if(time >= 12 && time <= 17){
        a = a + " afternoon!";
    }
    else{
        a = a + " evening!";
    }
    document.getElementById("msg").innerHTML = a;
}
function ofVotingAge(){
    var age,canVote;
    age =document.getElementById("age").value;
    if(age < 18){
        canVote="You are not old enough to vote."
    }
    else{
        canVote="You Can vote!"
    }
    document.getElementById("vote").innerHTML = canVote;
}