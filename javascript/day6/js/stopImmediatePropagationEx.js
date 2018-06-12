function fnload(){
    var eventPhase = {
        0:'NONE',
        1:'CAPTURE',
        2:'TARGET',
        3:'BUBBLE'
    };
    var depth1 = document.getElementById('depth1');
    var depth2 = document.getElementById('depth2');
    var depth3 = document.getElementById('depth3');
    var depth4 = document.getElementById('depth4');

    depth1.addEventListener('click',function(e){
        console.log(eventPhase[e.eventPhase] +' : depth1' );
    },false);
    depth2.addEventListener('click',function(e){
        console.log(eventPhase[e.eventPhase] +' : depth2' );
    },false);

    depth3.addEventListener('click',function(e){
        console.log(eventPhase[e.eventPhase] +' : depth3 : first' );
        e.stopPropagation();
    },false);
    depth3.addEventListener('click',function(e){
        console.log(eventPhase[e.eventPhase] +' : depth3 : second' );
        e.stopPropagation();
    },false);

    depth4.addEventListener('click',function(e){
        console.log(eventPhase[e.eventPhase] +' : depth4 : first' );
        e.stopImmediatePropagation();
    },false);
    depth4.addEventListener('click',function(e){
        console.log(eventPhase[e.eventPhase] +' : depth4 : second' );
        e.stopImmediatePropagation();
    },false);
}
