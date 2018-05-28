//조건식 : 참 또는 거짓으로 판별할 수 있는 식
var num = 10;
//num % 2 == 0 : num를 2로 나누었을 때 나머지가 0과 같다면
console.log("num : " + num);
if(num % 2 == 0){
    console.log("num는 짝수입니다.");
}
else{
    console.log("num는 홀수입니다.");
}
var id = prompt("아이디를 입력하세요");
if(id == "green"){
    var pw = prompt("비밀번호를 입력하세요");
    if(pw == "green"){
        alert("로그인에 성공했습니다.");
    }
    else//id는 맞았지만 pw는 틀리면
    {
        alert("비밀번호를 잘못 입력햇습니다.");
    }
}
else //id가 green이 아니면
{
    alert("아이디를 잘못 입력했습니다.");
}
