function checkScreen(){
    var str = new String();
    str = "availHeight :" + screen.availHeight +"\n";
    str += "availWidth : " + screen.availWidth +"\n";
    str += "width : " + screen.width +"\n";
    str += "height : " + screen.height +"\n";
    str += "pixelDepth : " + screen.pixelDepth +"\n";
    str += "colorDepth : " + screen.colorDepth +"\n";
    alert(str);
}