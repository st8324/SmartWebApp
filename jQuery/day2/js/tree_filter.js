// 부모의 id가 filter이고 자식이 div인 요소를 선택


$(".filter>div").eq(2).addClass("yellow");
$(".filter>div").first().css("background","green");
$(".filter>div").last().css("background","gray");

$(".filter>div").slice(3,5).css("font-weight","bold");
$(".filter>div").not(":eq(2)").css("border","dotted 1px black");

$(".filter>div").bind("click",function(){
    if($(this).is(".filter>div:eq(2)")){
        //선택된 요소의 글자색을 빨간색으로 수정
        $(this).css("color","red");
    }
});
$(".filter>div").filter(":even").css("padding","15px 0");
$(".filter>div").has("span").css("color","green");