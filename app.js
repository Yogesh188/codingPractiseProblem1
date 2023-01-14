var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");

var outputDiv = document.querySelector("#outputDiv");

function operation(operator){
    var userInput1=document.querySelector("#userInput1");
    var userInput2=document.querySelector("#userInput2");
    var answer= eval(Number(userInput1.value)+operator+Number(userInput2.value));
    outputDiv.innerText=(Number(answer));
}

//Get the click and start process (Call clickhandlers)
btn1.addEventListener("click",function func(){operation("+")});
btn2.addEventListener("click",function func(){operation("-")});
btn3.addEventListener("click",function func(){operation("*")});
btn4.addEventListener("click",function func(){operation("/")});