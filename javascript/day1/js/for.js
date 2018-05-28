
// 소수인지 판별하는 예제
var num = 10;
var i = 1;
var cnt = 0;//약수의 갯수
/*
1. 반복문을 i는 1에서 num까지 실행한다.
2. i가 num의 약수이면 약수의 갯수를 증가한다.
   = num을 i로 나누었을 나머지가 0이면 약수의 갯수를 증가한다.
3. 반복문이 종료 후 약수의 갯수가 2개이면 소수, 2개가 아니면
   합성수로 출력한다.
*/
console.log("num : " + num);
for(i=1; i <= num; i++){
    if(num % i == 0){
        cnt++;
    }
}
if(cnt == 2)
    console.log("소수");
else
    console.log("합성수");
/* 
1. 반복문을 i는 2에서 num까지 실행한다.
2. i가 num의 약수이면 break문을 이용하여 빠져나온다.
3. 반복문 종료 후 i가 1이면 num-1이면 소수 i가 num-1이 아니면 합성수
*/
for(i=2; i<num; i++){
    if(num % i == 0)
        break;
}
if(i == num)
    console.log("소수");
else
    console.log("합성수");

var arr = [100, 200, 300];
var sum = 0;
for(items in arr){
    sum += arr[items];
}
console.log(arr.join(" + ") + " = " + sum);
var arr2 = {A:10, B:20, C:30};
for(items in arr2){
    console.log("key : " + items + ", value : " + 
        arr2[items]);
}
inner:
for(i=1; i<10; i++){
    if(i == 3)
        break inner;
}
console.log(i);
var j;
outter1:
for(i=1; i<10; i++){
    inner1:
    for(j=1; j<4; j++){
        if(j == 2){
            console.log("i : " + i + ", j : " + j);
            break inner1;
        }
        if(i==5){
            console.log("i : " + i + ", j : " + j);
            break outter1;
        }
    }
}
//최대 공약수 구하는 코드를 작성하세요.
//12 : 1 2 3 4 6 12
//8  : 1 2 4 8
/*
1. 반복문은 i가 1부터 num1보다 작거나 같을 때 까지 반복한다.
2. i가 num1의 약수이고, i가 num2의 약수이면 이 때의 i를 약수 gcd에
   저장한다.
   i가 num1의 약수 = num1을 i로 나누었을 때의 나머지가 0이다.
3. 반복문이 다 끝나면 저장한 gcd의 값을 출력한다.
*/
var num1 = 8, num2 = 12;
var gcd = 1;
for(i=1; i<num1; i++){
    if(num1 % i ==0  && num2 % i == 0){
        gcd = i;
    }
}
console.log("num1 : " + num1 + ", num2 : " + num2);
console.log("num1과 num2의 최대 공약수 : " + gcd);
/*
최소 공배수를 구하세요.
15 : 15 30 45 60 75 90 ...
10 : 10 20 30 40 50 60 ...
15와 10의 최소 공배수 : 30

1. 반복문은 i는 15부터 15*10까지 반복하며 i는 15만큼 증가한다.
2. num2가 i의 약수이면 i를 최소공배수 lcm에 저장한 후 반복문을 
   종료한다.
3. 반복문이 종료되면 lcm을 출력한다.
*/
//15 30 45 60 75 91 ...

var lcm = 1;
for(i=num1; i<= num2 * num1; i += num1){
    if(i % num2 == 0){
        lcm = i;
        break;
    }
}
console.log("num1 : " + num1 + ", num2 : " + num2);
console.log("num1과 num2의 최소 공배수 : " + lcm);

lcm = num1 * num2 / gcd;
console.log("num1 : " + num1 + ", num2 : " + num2);
console.log("num1과 num2의 최소 공배수 : " + lcm);
/*
6
     *		i=1, 공백의 갯수=5, 별의 갯수=1
    ***		i=2, 공백의 갯수=4, 별의 갯수=3
   *****	i=3, 공백의 갯수=3, 별의 갯수=5
  *******	i=4, 공백의 갯수=2, 별의 갯수=7
 *********	i=5, 공백의 갯수=1, 별의 갯수=9
***********	i=6, 공백의 갯수=0, 별의 갯수=11
		i=n, 공백의 갯수=6-i별의 갯수=2*i-1
3
  *
 ***
*****

*/
cnt = prompt("트리의 세로를 입력하세요");
cnt = 1*cnt;
var tmp = "";
for(i = 1; i<= cnt; i++){
    for(j=1; j<= cnt - i; j++){
        tmp += " ";
    }
    for(j=1; j<= 2*i-1; j++){
        tmp += "*";
    }
    console.log(tmp);
    tmp="";
}
