/* document가 준비가 된다면  */
$(document).ready(function(){
    /* id가 fadeIn인 요소가 클릭되면 함수를 호출하라. */
    $("#fadeIn").click(function(){
        /* id가 div1인 요소를 서서히 나타내고,
           id가 div2인 요소를 천천히(slow : 미리 지정된 값) 
           나타내고,
           id가 div3인 요소를 3초 동안 나타낸다. */
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
    $("#fadeOut").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
    $("#fadeToggle").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});