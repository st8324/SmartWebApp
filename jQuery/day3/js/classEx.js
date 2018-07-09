/* 테이블 선택 시 선택된 테이블만 css 변경 되도록 하는 예제 */
/* 테이블에서 tbody를 부모로 가지는 tr 요소를 클릭하면 함수 실행 */
$("tbody > tr").on("click",function(){
    /* 클랙된 요소에는 font-red 클래스를 추가하고,
    tbody를 부로모 가지는 tr 요소 중에 선택된 요소(this)를 
    제외한 모든 요소에 font-red 클래스를 제거한다.
    */
    $(this).addClass("font-red");
    $("tbody > tr").not(this).removeClass("font-red");
});