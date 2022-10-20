function multiply() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function add() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = Number(num1) + Number(num2);
}

function divide() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

function minus() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1 - num2;  
}