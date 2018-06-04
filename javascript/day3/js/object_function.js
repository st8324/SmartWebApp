function printObj(obj){
    console.log("객체 정보 확인");
    for(var items in obj){
        console.log("obj["+items+"] : " + obj[items]);
    }
}