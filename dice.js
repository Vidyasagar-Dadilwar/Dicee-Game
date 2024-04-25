var p1=prompt("Enter player 1 name");
var p2=prompt("Enter player 2 name");
var s1=0,s2=0;

document.querySelectorAll("p")[0].innerHTML=p1;
document.querySelectorAll("p")[1].innerHTML=p2;

function roll(){
//For dice 1
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDice1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDice1);

//For dice 2
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDice2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

//Winner
var winner;
if(randomNumber1>randomNumber2){
    winner="🚩 "+p1+" wins";
    s1+=1;
}
else if(randomNumber1<randomNumber2){
    winner=p2+" wins 🚩";
    s2+=1;
}
else
    winner="It's a tie!!!";

document.querySelector("h1").innerHTML=winner;+"\n"+p1+" : "+s1+"\n"+p2+" : "+s2;
document.querySelector("h4").innerHTML=p1+" : "+s1+" --------- "+p2+" : "+s2;
}