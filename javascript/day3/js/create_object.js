

var obj1 = {'kiti':100};
printObj(obj1);
obj1['kate'] = 90;
printObj(obj1);
obj1.jj = 80;
printObj(obj1);

var obj2 = new Object();
obj2['kiti'] = 90;
obj2.kate = 40;
printObj(obj2);
console.log("obj1 type : "+typeof obj1);
console.log("obj2 type : "+typeof obj2);
delete(obj2.kate);
printObj(obj2);

var std = {
    name : "Tim",
    age : 20,
    sayHello : function(){
        return "이름 : " + this.name 
            + ", 나이 : " + this.age;
    }
};
console.log(std.sayHello());
std.sayHello2 = function(country){
    return this.sayHello() + ", contry : " 
        + country;
};
console.log(std.sayHello2('cheongju'));
