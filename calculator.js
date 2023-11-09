let screen = document.getElementById('screen');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn0 = document.getElementById('btn0');
let btnd = document.getElementById('btn.')
let btnpls = document.getElementById('btn+');
let btnmns = document.getElementById('btn-');
let btndiv = document.getElementById('btn/');
let btnmltp = document.getElementById('btn*');
let btnmeql = document.getElementById('btn=');
let btnc = document.getElementById('btnc');
let num1;
let num2;
let oper;
let result;

screen.innerHTML = 0

btn1.onclick = function buttonpress() {
    if (screen.innerHTML == '0.') { screen.innerHTML = '0.1' }
    else if (screen.innerHTML == 0) { screen.innerHTML = '1' }
    else { screen.innerHTML += '1' }
}
btn2.onclick = function buttonpress() {
    if (screen.innerHTML == '0.') { screen.innerHTML = '0.2' }
    else if (screen.innerHTML == 0) { screen.innerHTML = '2' }
    else { screen.innerHTML += '2' }
}
btn3.onclick = function buttonpress() {
    if (screen.innerHTML == '0.') { screen.innerHTML = '0.3' }
    else if (screen.innerHTML == 0) { screen.innerHTML = '3' }
    else { screen.innerHTML += '3' }
}
btn4.onclick = function buttonpress() {
    if (screen.innerHTML == '0.') { screen.innerHTML = '0.4' }
    else if (screen.innerHTML == 0) { screen.innerHTML = '4' }
    else { screen.innerHTML += '4' }
}
btn5.onclick = function buttonpress() {
    if (screen.innerHTML == '0.') { screen.innerHTML = '0.5' }
    else if (screen.innerHTML == 0) { screen.innerHTML = '5' }
    else { screen.innerHTML += '5' }
}
btn6.onclick = function buttonpress() {
    if (screen.innerHTML == '0.') { screen.innerHTML = '0.6' }
    else if (screen.innerHTML == 0) { screen.innerHTML = '6' }
    else { screen.innerHTML += '6' }
}
btn7.onclick = function buttonpress() {
    if (screen.innerHTML == '0.') { screen.innerHTML = '0.7' }
    else if (screen.innerHTML == 0) { screen.innerHTML = '7' }
    else { screen.innerHTML += '7' }
}
btn8.onclick = function buttonpress() {
    if (screen.innerHTML == '0.') { screen.innerHTML = '0.8' }
    else if (screen.innerHTML == 0) { screen.innerHTML = '8' }
    else { screen.innerHTML += '8' }
}
btn9.onclick = function buttonpress() {
    if (screen.innerHTML == '0.') { screen.innerHTML = '0.9' }
    else if (screen.innerHTML == 0) { screen.innerHTML = '9' }
    else { screen.innerHTML += '9' }
}
btn0.onclick = function buttonpress() {
    if (screen.innerHTML == 0) { }
    else { screen.innerHTML += '0' }
}
btnd.onclick = function buttonpress() {
    let dec = screen.innerHTML
    if (dec.includes('.') == true) { }
    else { screen.innerHTML += '.' }
}
btnpls.onclick = function buttonpress() {
    num1 = screen.innerHTML;
    screen.innerHTML = 0;
    oper = '+'
}
btnmns.onclick = function buttonpress() {
    num1 = screen.innerHTML;
    screen.innerHTML = 0;
    oper = '-'
}
btndiv.onclick = function buttonpress() {
    num1 = screen.innerHTML;
    screen.innerHTML = 0;
    oper = '/'
}
btnmltp.onclick = function buttonpress() {
    num1 = screen.innerHTML;
    screen.innerHTML = 0;
    oper = '*'
}
btnmeql.onclick = function buttonpress() {
    num2 = screen.innerHTML;
    switch (oper) {
        case '+':
            result = Number(num1) + Number(num2)
            break;
        case '-':
            result = Number(num1) - Number(num2)
            break;
        case '/':
            result = Number(num1) / Number(num2)
        case '*':
            result = Number(num1) * Number(num2)
    }
    screen.innerHTML = result
}
btnc.onclick = function buttonpress() {
    screen.innerHTML = 0
}