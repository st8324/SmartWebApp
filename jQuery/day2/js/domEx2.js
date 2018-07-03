/*
    -해당 위치 마지막에 내용 추가
    위치.append(내용) : 마지막에 추가
    내용.appendTo(위치): 마지막에 추가
    -해당 위치 처음에 내용 추가
    위치.prepend(내용) : 처음에 추가
    내용.prependTo(위치): 처음에 추가
    text() : 텍스트 컨텐츠를 가져온다.
    위치.after(내용) : 뒤에 추가
    위치.before(내용) : 앞에 추가
    내용.insertAfter(위치): 뒤에 추가
    내용.insertBefore(위치): 앞에 추가
    wrap() : 하나의 요소를 감싸는 부모 요소 생성
    wrapAll() : 다수의 요소를 감싸는 부모 요소 생성
    unwrap() : 부모 요소를 제거
    detach() : 요소를 삭제
    remove() : 요소 및 관련 이벤트 data를 삭제
    empty() : 요소의 모든 자식을 삭제
    clone() : 복사
    replaseAll() : 입력받은 요소를 교체
 */

// btn1 버튼을 클릭하면 inner 클래스가 있는 요소 마지막에
// <br><b>추가 테스트</b><br>를 추가
$("#btn1").click(function(){
    $(".container .inner").append("<br><b>추가 테스트</b><br>");
});
// <br><b>추가 테스트</b><br>를 container 클래스가 있는
// 요소 맨 앞에 추가
$("<br><b>추가 테스트</b><br>").appendTo(".container");
// inner 클래스를 포함하는 요소들 중에서 첫번째 요소
// 맨 앞에 prepend 테스트 <br>를 추가
$(".container .inner").first().prepend("<button>프리팬드</button>");

// append와 prepend는 위치 안에 자식요소로 들어가는데, before와 after는 인접요소로
// 들어간다.
$(".container2 .inner").last().before("<button>Before</button>");
$(".container2 .inner").last().after("<button>After</button>");