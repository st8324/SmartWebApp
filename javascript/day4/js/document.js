//id를 이용해 Element 를 검색해서 스타일을 수정 예제
var h1 = document.getElementById('hid');
h1.style.color = 'red';
h1.style.fontSize = '20px';
h1.style.fontWeight = '100';

function fontColorBlue(){
    //class를 이용해 Element를 검색해서 스타일을 수정 예제
    var h2 = document.getElementsByClassName('hclass');
    for(var i in h2){
        h2[i].style.color = 'blue';
        h2[i].style.fontSize = '40px';
        h2[i].style.fontWeight = '100';
    }
}
//.hclass 셀렉터를 가진 객체를 찾음
var h3 = document.querySelector('.hclass');
h3.style.fontSize = '100px';

//H1 태그 생성 : header
var header = document.createElement('H1');
//텍스트 노드 생성
var text = document.createTextNode('생성');
//텍스트 노드를 H1태그에 붙임
header.appendChild(text);
//H1 태그를 body태그에 붙임
document.body.appendChild(header);
