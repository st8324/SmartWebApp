$("body").delegate("input", "focus blur",function(){
    var element = $(this);
    element.toggleClass("focused", element.is(":focus"));
});
$("button").click(function(){
    alert("제출 완료");
    $("input").val("");
});