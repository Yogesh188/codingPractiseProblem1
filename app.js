var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");

var outputDiv = document.querySelector("#outputDiv");

function operation(operator){
    var userInput1=document.querySelector("#userInput1");
    var userInput2=document.querySelector("#userInput2");
    // var answer=eval(userInput1+operator+userInput2);
    // outputDiv.innertext(answer);
    var answer=userInput1+userInput2;
    return answer;
}

function clickHandler1(){
    // var userInput1=document.querySelector("#userInput1");
    // var userInput2=document.querySelector("#userInput2");
    // outputDiv.innerText="";
    // userInput1=Number(userInput1.value);
    // userInput2=Number(userInput2.value);
    // var answer=userInput1+userInput2;
    // outputDiv.innerText = answer;
    var answer = operation()
    outputDiv.innertext(operation("+"));
}

function clickHandler2(){
    var userInput1=document.querySelector("#userInput1");
    var userInput2=document.querySelector("#userInput2");
    outputDiv.innerText="";
    userInput1=Number(userInput1.value);
    userInput2=Number(userInput2.value);
    var answer=userInput1-userInput2;
    outputDiv.innerText = Number(answer);
}


function clickHandler3(){
    var userInput1=document.querySelector("#userInput1");
    var userInput2=document.querySelector("#userInput2");
    outputDiv.innerText="";
    userInput1=Number(userInput1.value);
    userInput2=Number(userInput2.value);
    var answer=userInput1*userInput2;
    outputDiv.innerText = Number(answer);
}


function clickHandler4(){
    var userInput1=document.querySelector("#userInput1");
    var userInput2=document.querySelector("#userInput2");
    outputDiv.innerText="";
    userInput1=Number(userInput1.value);
    userInput2=Number(userInput2.value);
    var answer=userInput1/userInput2;
    outputDiv.innerText = Number(answer);
}

//Get the click and start process (Call clickhandlers)
btn1.addEventListener("click",clickHandler1);
btn2.addEventListener("click",clickHandler2);
btn3.addEventListener("click",clickHandler3);
btn4.addEventListener("click",clickHandler4);