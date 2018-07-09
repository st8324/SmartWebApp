
$("select").on("change",function(){
    //$("#input").val($(this).val());
    //$("#input").val($("select").find("option:selected").val());
    //1. 선텍된 셀렉트 값 가져오기
    var selectVal = $(this).val();
    //2. 선택된 셀렉트의 값이 1인지 비교
    if(selectVal == '1'){
        //3. 1이 맞다면 input태그의 값을 비움
        $("#input").val("");
        //4. 그리고 input태그의 속성 readonly를 false로 설정
        $("#input").prop("readonly",false);
    }
    //5. 선택된 셀렉트의 값이 1이 아니라면 
    else{
        //6. input태그의 값을 선택된 값으로 저장
        $("#input").val(selectVal);
        //7. 그리고 input 태그의 속성 readonly를 true로 설정
        $("#input").prop("readonly",true);
    }
});



