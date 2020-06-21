let ipText = document.getElementById("InputText");
let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");

var num1 = 0;
var num2 = 0;
var operation = 0;

function setText(num){
    ipText.value = num;
}
function clearText(){
    ipText.value = 0;
}
function addition(){
    num1 = parseInt(ipText.value);
    operation = 1;
    console.log(num1);
}
function subtraction(){
    num1 = parseInt(ipText.value);
    operation = 2;
    console.log(num1);
}
function multiplication(){
    num1 = parseInt(ipText.value);
    operation = 3;
    console.log(num1);
}
function division(){
    num1 = parseInt(ipText.value);
    operation = 4;
    console.log(num1);
}

function result(){
    num2 = parseInt(ipText.value);
    if(operation == 1){
        num2 += num1;
        ipText.value = num2;
    }
    else if(operation == 2){
        num2 -= num1;
        ipText.value = num2;
    }
    else if(operation == 3){
        num2 *= num1;
        ipText.value = num2;
    }
    else{
        num1 /= num2;
        ipText.value = num1;
    }
}
