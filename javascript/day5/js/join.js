
var formTag = document.getElementById('formTag');
formTag.onsubmit = function(){
    //id가 usr인 객체를 가져와서 그 객체의 value를 id에 저장
    var id = document.getElementById('usr').value;
    var pwd = document.getElementById('pwd').value;
    var pwdConfirm = document.getElementById('pwdConfirm').value;
    var inforId = document.getElementById('inforId');
    var inforPwd = document.getElementById('inforPwd');
    var inforPwdConfirm = document.getElementById('inforPwdConfirm');

    inforId.style.display = 'none';
    inforPwd.style.display = 'none';
    inforPwdConfirm.style.display = 'none';
    var isOk = true;
    //id의 길이가 0이면
    if(id.length == 0){
        inforId.style.display = 'block';
        isOk = false;
    }
    if(pwd.length == 0){
        inforPwd.style.display = 'block';
        isOk = false;
    }
    if(pwd != pwdConfirm){
        inforPwdConfirm.style.display = 'block';
        isOk = false;
    }
    if(!isOk)
        return false;
}