$(".filter>div").bind("click",function(){
    //빨간색 클릭
    if($(this).is(".filter>div:first()")){
        $(".filter>div").css("color","white");
        //$(".filter>div").css("font-weight","bold");
    }
    //보라색 클릭
    else if($(this).is(".filter>div:last()")){
        $(".filter>div").css("border","dotted black");
    }
    //주황색 클릭
    else if($(this).is(".filter>div:eq(1)")){
        $(".filter>div").not(this).css("font-weight","bold");
    }
    //남색 클릭
    else if($(this).is(".filter>div:eq(5)")){
        $(".filter>div").slice(0,5).css("border","solid 2px black");
    }
});