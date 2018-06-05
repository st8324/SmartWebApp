function setColorById(id, color){
    document.getElementById(id).style.color = color;
}
function setColorByClassName(className, color){
    var allTitle = document.getElementsByClassName(className);
    for(var i=0; i<allTitle.length; i++)
        allTitle[i].style.color = color;
}

function setBtnByClassName(className){
    var buttons = document.getElementsByClassName(className);
    for(var i = 0; i<buttons.length; i++){
        buttons[i].style.border = 'none';
        buttons[i].style.fontWeight = '700';
        buttons[i].style.color = 'white';
    }
}
function setBtnColorByClassName(className,color){
    var buttons = document.getElementsByClassName(className);
    for(var i = 0; i<buttons.length; i++){
        buttons[i].style.backgroundColor = color;
    }
}
setBtnByClassName('btn');
setBtnColorByClassName('red','red');
setBtnColorByClassName('blue','blue');
setBtnColorByClassName('green','green');
setBtnColorByClassName('black','black');




