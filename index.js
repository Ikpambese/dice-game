
var randomNumber1 = Math.floor(Math.random() * 6)+1;


var randomDice = "dice"+randomNumber1+".png";
var randomImageSourse = "images/"+randomDice;
var dice1 =  document.querySelectorAll("img")[0];

dice1.setAttribute("src", randomImageSourse);




//

var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomDice2 = "dice"+randomNumber2+".png";
var randomImageSourse2 = "images/"+randomDice2;
var dice2 = document.querySelectorAll("img")[1];

dice2.setAttribute("src", randomImageSourse2);