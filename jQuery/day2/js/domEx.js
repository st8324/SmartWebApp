// em태그 요소에 title 정보를 가져와서 변수 title 저장
var title = $("em").attr("title");
// id가 test인 요소에 텍스트를 출력
$("#test").text("Attr : "+title);

// prop("프로퍼티") : 해당 프로퍼티의 값을 가져옴
// prop("프로퍼티",value) : 해당 프로퍼티가 있으면 기존값을 
// value로 수정하고 없으면 프로퍼티 생성후 value로 초기화
// id가 p인 요소에 number라는 프로퍼티(멤버변수)를 생성하고 
// 값으로 1234를 저장
$("#p").prop("number",1234);
// 위에서 생성한 프로퍼티 number를 id가 div1인 요소에 텍스트로 
// 출력
$("#div1").text("Property Create: " + $("#p").prop("number"));
// id가 p인 요소의 프로퍼티 number를 제거
$("#p").removeProp("number");
// 제거된 프포퍼티를 출력하려고 하기 때문에 undefined가 출력
$("#div2").text("Property Remove: " + $("#p").prop("number"));

// id가 btn1인 요소를 클릭하면 function을 실행해라
// id가 btn1인 요소(버튼) 클릭하면 다음 함수 실행
$("#btn1").click(function(){
    // input태그에 있는 값을 가져와서 Test A를 추가하여
    // text에 저장
    var text = "TEST A"+$("input").val();
    // text에 저장된 문자열 input태그에 출력
    $("input").val(text);
});

// id가 btn2인 요소(버튼) 클릭하면 다음 함수 실행
$("#btn2").click(function(){
    //input태그의 값을 비워라
   $("input").val("");
});