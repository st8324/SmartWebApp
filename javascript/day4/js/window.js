var myWindow;
function openWindow(){
    //윈도우를 하나 연다 = 윈도우 객체를 하나 생성한다
    //윈도우 객체를 만들어서 myWindow에 저장
    myWindow = window.open("","MyWindow"
    , "width=200, height=200, toolbar=yes, location=yes, menubar=yes"
    + ",scrollbars=yes, resizable=yes");
}
function closeWindow(){
    //myWindow에 저장된 윈도우 객체가 있으면 닫음
    if(myWindow)
        myWindow.close();
}
function blurWindow(){
    if(myWindow){
        myWindow.blur();
    }
}
function focusWindow(){
    if(myWindow){
        myWindow.focus();
    }
}
function checkWindow(){
    if(!myWindow){
        //myWindow는 한번도 열린 적이 없음( myWindow가 비어 있을 때 참이므로)
        alert('한번도 열린 적이 없음');
    }
    else{
        //myWindow가 열린적은 있지만 지금은 닫혀있음
        if(myWindow.closed)
            alert('닫혀 있음');
        //myWindow가 열려 있음
        else
            alert('열려있음');
    }
}
function moveByWindow(){
    myWindow.moveBy(50,50);
}
function moveToWindow(){
    myWindow.moveTo(50,50);
}
function resizeByWindow(){
    myWindow.resizeBy(300,300);
}
function resizeToWindow(){
    myWindow.resizeTo(300,300);
}