var num1 = prompt("숫자1을 입력하세요");
var num2 = prompt("숫자2을 입력하세요");
var op = prompt("연산자 입력하세요");
var result = 0;
switch(op){
case '+': 
    result = 1*num1 + num2*1;
    console.log(num1 + op + num2 + "=" + result);
    break;
case '-':
    result = num1 - num2;
    console.log(num1 + op + num2 + "=" + result);
    break;
case '*':
    result = num1 * num2;
    console.log(num1 + op + num2 + "=" + result);
    break;
case '/':
    result = num1 / num2;
    console.log(num1 + op + num2 + "=" + result);
    break;
case '%':
    result = num1 % num2;
    console.log(num1 + op + num2 + "=" + result);
    break;
default:
    console.log("연산자를 잘못 입력했습니다.");
    break;
}
//console.log(num1 + op + num2 + "=" + result);