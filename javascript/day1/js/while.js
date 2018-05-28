
var i = 1;
var sum = 0;
while(i <= 10){
    console.log("i : "+i);
    sum += i;//sum = sum + i;
    i++;
}
console.log("sum : " + sum);

i = 11;
sum = 0;
do{
    console.log("i : " +i);
    sum += i;
    i++;
}while(i<=10);
console.log("sum : " + sum);