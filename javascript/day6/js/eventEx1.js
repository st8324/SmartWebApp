function func1(){
    alert('동작1');
}
function func2(){
    alert('동작2');
}
var btn = document.getElementById('btn');

if(btn.addEventListener){
    btn.addEventListener('click',func1);
    btn.addEventListener('click',func2);
}
else if(btn.attachEvent){
    btn.attachEvent('onclick',func1);
    btn.attachEvent('onclick',func2);
}
