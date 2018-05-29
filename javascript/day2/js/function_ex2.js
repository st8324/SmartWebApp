//최대 공약수 구하는 함수
function gcd(num1, num2){
    var gcdNum = 1; 
    var i;
    for(i=1; i<num1; i++){ 
        if(num1 % i ==0  && num2 % i == 0){ 
            gcdNum = i; 
        } 
    }
    return gcdNum; 
}
console.log("gcd(9,16) : " + gcd(9,16));
//최소 공배수 구하는 함수
function lcm(num1, num2){
    var i;
    for(i=num1; i<= num2 * num1; i += num1){ 
        if(i % num2 == 0){ 
            return i;
        } 
    } 
}
console.log("lcm(8,12) : " + lcm(8,12));
//약수 구하는 함수

function divisor (num){
    var i;
    var res=new Array();
    for( i = 1; i<= num; i++){
        if( num % i == 0){
            res.push(i);
        }
    }
    return res;
}
var divNum = 12;
var res = divisor(divNum);
console.log(divNum + "의 약수 : " + res.join(" , "));
//약수의 합1
function divisorSum(res){
    var sum = 0;
    for(var i=0; i< res.length; i++){
        sum += res[i]; //sum += res.pop();
    }
    return sum;
}
console.log(divNum + "의 약수의 합1 : " + divisorSum(res));
//약수의 합2
function divisorSum2(res){
    var sum = 0;
    for(var index in res){
        sum += res[index]; //sum += res.pop();
    }
    return sum;
}
console.log(divNum + "의 약수의 합2 : " + divisorSum2(res));
//성적 등급 매기는 함수
function getGrade(num){
    
    if(num <= 100 && num >= 90){
        return 'A';
    }else if(num >= 80 && num < 90){
        return 'B';
    }else if(num >= 70 && num < 80){
        return 'C';
    }
    else if(num >= 60 && num < 70){
        return 'D';
    }
    else if(num >= 0 && num < 60){
        return 'F';
    }
    else 
        return 'Fail';
}
/*
var grade = 120;
var resultGrade = getGrade(grade);
console.log(grade + " : " + resultGrade);
var count = 1;
var student = new Array();
for(i = 0; i<5; i++){
    var tmp = prompt((i+1) +"번째 과목 성적을 입력하세요 : ");
    tmp = parseFloat(tmp);
    student.push(getGrade(tmp));
}
alert("학생의 성적 : " + student.join(", "));
*/
//서로소인지 판별하는 함수
function isCoprime(num1, num2){
    if(gcd(num1,num2) == 1)
        return true;
    else 
        return false;
}
var coNum1 = 5, coNum2 = 9;
console.log( coNum1 + "와 " + coNum2 + "는 서로소? : " 
        + isCoprime(coNum1, coNum2));

//로또 번호 만드는 함수
function randomInt(min, max){
    if(min > max){
        var tmp = min;
        min = max;
        max = tmp;
    }
    return parseInt(Math.random()*(max-min+1) + min);
}
function getLotto(){
    var i, j;
    var tmp; //랜덤으로 생성된 번호를 저장
    var res = new Array();//로또 번호를 저장할 배열
    while(res.length < 6){
        tmp = randomInt(1,45);
        i = 0;
        while(i < res.length){
            if(tmp == res[i])
                break;
            i++;
        }
        if(i == res.length)
            res.push(tmp);
    }
    return res;
}
console.log(getLotto().join(", "));