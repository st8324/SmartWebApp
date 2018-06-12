var btn2 = document.getElementById('btn2');
btn2.onclick = function(e){
    var event = e || window.event;
    document.body.innerHTML = "";
    for( var key in event){
        document.body.innerHTML += key + ':' 
            + event[key] + '<br>';
    }
}
