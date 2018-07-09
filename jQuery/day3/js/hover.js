$("button").hover(function(){
    $("div").slideToggle();
});
$("body").keydown(function(e){
   console.log(ascToChar(e.which));
});
function ascToChar(asc){
    switch(asc){
        case 65:    return 'A';
        case 66:    return 'B';
        case 67:    return 'C';
        case 68:    return 'D';
        case 69:    return 'E';
        case 70:    return 'F';
        case 71:    return 'G';
        case 72:    return 'H';
        default: return '기타';
    }
}