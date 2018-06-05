function createE(tag, value){
    if(!isCreated){
        //tag를 생성
        var e = document.createElement(tag);
        //생성된 tag에 속성을 추가 : id= text
        e.setAttribute('id','text');
        //텍스트노드 생성
        var t = document.createTextNode(value);
        //생성된 텍스트 노드를 tag에 붙임
        e.appendChild(t);
        //tag를 body에 붙임
        document.body.appendChild(e);
        //생성됐는지 확인하는 변수인 isCreated를 true로 설정
        isCreated = true;
        document.getElementById('btn1').value = '삭제';
    }
    else{
        //삭제할 tag를 검색
        var e = document.getElementById('text');
        //삭제
        document.body.removeChild(e);
        //icreated를 false로 설정하여 다시 생성할 수 있게 한다.
        isCreated = false;
        document.getElementById('btn1').value = '생성';
    }
}

var isCreated = false;

