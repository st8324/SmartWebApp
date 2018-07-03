/*
    addClass("클래스") : 클래스를 추가
    removeClass("클래스") : 클래스 제거
    toggleClass("클래스") : 클래스가 있으면 제거, 
                            없으면 추가
    hasClass("클래스") : 클래스가 있는지 없는지를
                        true, false 값으로 리턴
*/
/*
    첫번째 박스 : 클릭하면 css에서 만들어 놓은 클래스를 추가
                하여 배경색을 변경한다.
    두번째 박스 : 클릭하면 테두리를 적용하고 있는 클래스를 
                제거한다.
    세번째 박스 : 내가 지정한 class가 있으면 아무일도 하지
                않고 없으면 해당 클래스를 추가
    네번째 박스 : 한번 누르면 클래스 제거, 더 누르면
                클래스 생성을 반복
 */

// 첫번째 박스
// $(".base").first() == $(".base").eq(0)
$(".base").first().click(function(){
    $(".base").first().addClass("bg-yellow");
});
// 두번째 박스
$(".base").eq(1).click(function(){
    $(".base").eq(1).removeClass("border");   
});
// 세번째 박스
$(".base").eq(2).click(function(){
    if(!$(".base").eq(2).hasClass("bg-yellow")){
        alert("bg-yellow 클래스가 없습니다.");
        $(".base").eq(2).addClass("bg-yellow");
    }
});
// 네번째 박스
$(".base").last().click(function(){
    $(".base").last().toggleClass("bg-yellow");
});