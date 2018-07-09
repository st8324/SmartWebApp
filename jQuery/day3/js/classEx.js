/* 테이블 선택 시 선택된 테이블만 css 변경 되도록 하는 예제 */
/* 테이블에서 tbody를 부모로 가지는 tr 요소를 클릭하면 함수 실행 */
$("tbody > tr").on("click",function(){
    /* 클랙된 요소에는 font-red 클래스를 추가하고,
    tbody를 부로모 가지는 tr 요소 중에 선택된 요소(this)를 
    제외한 모든 요소에 font-red 클래스를 제거한다.
    */
    $(this).addClass("font-red");
    
    $("tbody > tr").not(this).removeClass("font-red");
    //$("tbody > tr").not(this).find("input").prop("checked",false);
    /* 현재 선택된 요소 안에 있는 input 태그를 찾아서 상태가 cheched인지 확인하여
    true이면(체크된 상태이면) 현재 선택된 요소 안에 input태그의 체크 상태를 해제하고
    false(체크 되지않은 상태)이면 현재 선택된 요소 안에 input태그의 체크 상태를 설정한다. */
    if($(this).find("input").is(":checked")){//체크된 상태이면
        $(this).find("input").prop("checked", false);
        //$(this).removeClass("bg-yellow"); //=>toggleClass 대체
    }
    else{
        $(this).find("input").prop("checked", true);
        //$(this).addClass("bg-yellow"); //=>toggleClass 대체
    }
    // 체크박스의 상태가 설정상태이면 배경색을 노랑으로, 아니면 흰색으로 설정
    $(this).toggleClass("bg-yellow");
});