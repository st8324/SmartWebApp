$(function() {
    var count = $('#rank-list li').length;
    var height = $('#rank-list li').height();

    function step(index) {
        if(index != 0){
            $('#rank-list ol').delay(1000).animate({
                top: -height * index,
            }, 500, function() {
                step((index + 1) % count);
            });
        }
        else{
            $('#rank-list ol').delay(1000).animate({
                top: -height * index,
            }, 0, function() {
                step((index + 1) % count);
            });
        }
    }
    step(1);
});
$(function() {
    var count2 = $('#rank-list2 li').length;
    var height2 = $('#rank-list2 li').height();

    function step2(index) {
        if(index != 0){
            $('#rank-list2 ol').delay(1000).animate({
                top: -height2 * index,
            }, 500, function() {
                step2((index + 1) % count2);
            });
        }
        else{
            $('#rank-list2 ol').delay(1000).animate({
                top: -height2 * index,
            }, 0, function() {
                step2((index + 1) % count2);
            });
        }
    }
    step2(1);
    
});
$(document).ready(function(){
    $("#rank-list a").hover(function(){
        $(".search-hover").toggleClass('display-block');
     });
     $("#autoSearch").click(function(){
         $("#search-hidden").toggleClass('display-block');
     });
});
