
var formTag = document.getElementById('formTag');
formTag.onsubmit = function(){
    //id가 usr인 객체를 가져와서 그 객체의 value를 id에 저장
    var id = document.getElementById('usr').value;
    var pwd = document.getElementById('pwd').value;
    var pwdConfirm = document.getElementById('pwdConfirm').value;
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var day = parseInt(document.getElementById('day').value);
    var number = document.getElementById('number').value;
    
    var isOk = true;
    
    //id 유효성 검사
    if(!checkValidId(id)){
        isOk = false;
    }
    //pwd 유효성 검사
    if(!checkValidPw(pwd)){
        isOk = false;
    }
    //비밀번호와 비밀번호 확인이 같은지를 검사
    if(!checkValidPwdConfirm(pwdConfirm)){
        isOk = false;
    }
    
    if(!checkValidBirth()){
        isOk = false;
    }
    if(!checkValidNumber(number)){
        isOk = false;
    }
    if(!isOk)
        return false;
}
function maxDay(month){
    switch(month){
        case '1': case '3': case '5': case '7': case '8': case '10': case '12':
            return 31;
        case '2':
            return 28;
        default:
            return 30;
    }
}
/* ID의 유효성을 검사 */
function checkValidId(id){
    var idRegex = /^[a-zA-Z]\w{4,9}$/;
    var inforId = document.getElementById('inforId');

    inforId.style.display = 'none';
    if(id.length == 0 || !idRegex.test(id)){
        inforId.style.display = 'block';
        return false;
    }
    return true;
}
function checkValidPw(pwd){
    var pwdRegex = /^(?=\w{8,20}$)\w*(\d[A-z]|[A-z]\d)\w*$/;
    var inforPwd = document.getElementById('inforPwd');

    inforPwd.style.display = 'none';
    if(pwd.length == 0 || !pwdRegex.test(pwd)){
        inforPwd.style.display = 'block';
        return false;
    }
    return true;
}
/* 비밀번호와 비밀번호 확인 같은지를 확인하는 함수 */
function checkValidPwdConfirm(pwdConfirm){
    //비밀번호
    var pwd = document.getElementById('pwd').value;
    //비밀번호와 일치하지 않을 때 보여줄 문구
    var inforPwdConfirm = document.getElementById('inforPwdConfirm');
    inforPwdConfirm.style.display = 'none';
    if(pwd != pwdConfirm){
        inforPwdConfirm.style.display = 'block';
        return false;
    }
    return true;
}
function checkValidBirth(){
    //year, month, day에 대한 객체의 값
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var day = parseInt(document.getElementById('day').value);
    //예외처리 문구에 대한 객체 정보
    var inforBirth = document.getElementById('inforBirth');
    //예외처리 문구를 가림
    inforBirth.style.display = 'none';
    //월의 마지막 날짜를 계산
    var max = maxDay(month);
    
    //유효성 검사
    if(year.length != 4){
        inforBirth.innerHTML = '태어난 년도 4자리를 정확하게 입력하세요.';
        inforBirth.style.display = 'block';
        return false;
    }else if(isNaN(parseInt(month))){
        inforBirth.innerHTML = '태어난 월을 선택하세요.';
        inforBirth.style.display = 'block';
        return false;
    }else if(isNaN(day) || day < 1 || day > max){
        inforBirth.innerHTML = '태어난 일(날짜) 2자리를 정확하게 입력하세요.';
        inforBirth.style.display = 'block';
        return false;
    }
    return true;
}
function checkValidNumber(number){
    //유효성 검사 문구에 대한 객체 정보
    var inforNumber = document.getElementById('inforNumber');
    //유효성 검사 문구를 숨김
    inforNumber.style.display = 'none';
    //정규표현식
    var numberRegex =/^010\d{8}$/;
    //유효성 검사
    if(!numberRegex.test(number)){
        inforNumber.style.display = 'block';
        return false;
    }
    return true;
}