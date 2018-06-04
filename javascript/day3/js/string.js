var str = new String('Hello world');
console.log(str);
console.log("str length : " + str.length );

//한글자 확인
console.log("str[0] : " + str[0]);
console.log("str.charAt(0) : " + str.charAt(0));

//모두 대문자로
console.log("str.toUpperCase() : " + str.toUpperCase());

//모두 소문자로
console.log("str.toLowerCase() : " + str.toLowerCase());

//문자열 찾기
console.log("str.indexof(\'wo\') : " + str.indexOf('wo'));
console.log("str.indexof(\'ab\') : " + str.indexOf('ab'));
console.log("str.indexof(\'wo\',7) : " + str.indexOf('wo',7));
