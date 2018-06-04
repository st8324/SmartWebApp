function Student(name,grade,clas,number){
    this.name = name;
    this.grade = grade;
    this.class = clas;
    this.number = number;
    this.toString = function(){
        return new String("이름 : " + this.name + ", 학년 : " + this.grade
            + ", 반 : " + this.class + ", 번호 : " + this.number);
    };
}

var std1 = new Student('홍길동', 1, 1, 10);
console.log(std1.toString());
var std2 = new Student('임꺽정', 1, 1, 1);
console.log(std2.toString());
std2.sayHello = function(){
    return "Hello";
}
console.log(std2.sayHello());
//console.log(std1.sayHello());
Student.prototype.sayHi = function(){
    return "Hi";
}
console.log(std2.sayHi());
var ts = std2.toString();//이름 : 임꺽정, 학년 : 1, 반 : 1, 번호 : 1
var subts = ts.split(', ');

// ts == subts.join(',')
var res = new Array();
for(var i in subts){
    var tmp = subts[i].split(' : ');
    res.push(tmp[0]);
}
console.log(res.join(' and '));
//subts : '이름 : 임꺽정' '학년 : 1' '반 : 1' '번호 : 1'
// i : 3
// res : '이름' '학년' '반' '번호'
// tmp : '번호' '1'
//'임꺽정 and 1 and 1 and 1'
var res2 = new Array();
res2.push(std2.name);
res2.push(std2.grade);
res2.push(std2.class);
res2.push(std2.number);
console.log(res2.join(" and "));

