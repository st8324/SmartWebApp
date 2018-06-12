//현재 입력되고 있는 숫자의 위치가 num1인지, num2인지 알려주는 변수
var numPos = 1;

function setNum(num){
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    //num1에 입력중이면
    if(numPos == 1){
        if(num1.value == '0')
            num1.value = num;
        else    
            num1.value = num1.value + num;
    }
    //num2에 입력중이면
    else{
        if(num2.value == '0')
            num2.value = num;
        else    
            num2.value = num2.value + num;
    }
}
function setOp(op){
    var operator = document.getElementById('op');
    
    if(numPos == 1){
        operator.value = op;
        numPos = 2;
    }
}
function cal(num1, op, num2){
    switch(op){
    case '+':
        return num1 + num2;
    case '-':
        return num1 - num2;
    case '*':
        return num1 * num2;
    case '/':
        return num1 / num2;
    }
}
function getRes(){
    if(numPos == 2){
        var num1Value = parseInt(document.getElementById('num1').value);
        var num2Value = parseInt(document.getElementById('num2').value);
        var opValue = document.getElementById('op').value;
        document.getElementById('res').value 
            = cal(num1Value, opValue, num2Value);
    }
}
function clears(){
    numPos = 1;
    document.getElementById('num1').value = '0';
    document.getElementById('num2').value = '0';
    document.getElementById('res').value = '0';
    document.getElementById('op').value = '';
}