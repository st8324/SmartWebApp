$(document).ready(function(){
    $('#naverJunior').hover(function(){
        $('#red').toggleClass('red');
        $('#blue').toggleClass('blue');
        $('#orange').toggleClass('orange');
        $('#green').toggleClass('green');
    });
    $('#happyBean').hover(function(){
        $('#happy').toggleClass('green');
        $('#bean').toggleClass('lightgreen');
    })
    $('#more').click(function(){
        $('#menu-contents').toggleClass('display-none');
        $('.container').toggleClass('dark');
        $('.more-up').toggleClass('display-none');
        $('.more-down').toggleClass('display-none');
        $('#btns').toggleClass('display-none');
        $('.realtime-search').toggleClass('display-none');
    });
    $('#close').click(function(){
        $('#menu-contents').toggleClass('display-none');
        $('.container').toggleClass('dark');
        $('.more-up').toggleClass('display-none');
        $('.more-down').toggleClass('display-none');
        $('#btns').toggleClass('display-none');
        $('.realtime-search').toggleClass('display-none');
    });

    var index = 0;

    $('#next').click(function(){
        
        index = (index+1)%6;
        
        $('#etcContents div').eq(index).removeClass('display-none');    
        $('#etcContents div').eq(index).addClass('display-block');
        
        $('#etcContents div').not($('#etcContents div').eq(index))
            .removeClass('display-block');
        $('#etcContents div').not($('#etcContents div').eq(index))
            .addClass('display-none');
    });
    $('#prev').click(function(){
        
        index = (index-1)%6;
        if(index == -1)
            index = 5;
        $('#etcContents div').eq(index).removeClass('display-none');    
        $('#etcContents div').eq(index).addClass('display-block');
        
        $('#etcContents div').not($('#etcContents div').eq(index))
            .removeClass('display-block');
        $('#etcContents div').not($('#etcContents div').eq(index))
            .addClass('display-none');
    });
});