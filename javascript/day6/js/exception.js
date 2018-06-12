try{
    
    var arr = new Array(4294967296);
    throw '123';
}catch(exception){
    if(exception == '123')
        alert('123');
    else
        alert(
            "name : " + exception.name + 
            "\nmessage : " + exception.message +
            "\ndescription : " + exception.description
        );
}