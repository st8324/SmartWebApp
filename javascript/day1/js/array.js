var arr1 = [123, "123", true];

console.log("arr1 : " + arr1);
console.log("arr1 type : " +
    typeof arr1[0] +", "+ typeof arr1[1] +", " 
    + typeof arr1[2]);
var arr2 = new Array();
arr2[4] = "123";
console.log("arr2 : " + arr2);

var arr3 = ["Hello", "world"];
var arr4 = arr3.concat(arr1);
console.log("arr4 : " + arr4);

arr4.push(1234);
console.log("arr4 : " + arr4);

var tmp = arr4.pop();
console.log("arr4.pop() : " + tmp);
console.log("arr4 : " + arr4);

tmp = arr4.shift();
console.log("arr4.shift() : " + tmp);
console.log("arr4 : " + arr4);

var len = arr4.unshift(tmp);
console.log("arr4.unshift() : " + len);
console.log("arr4 : " + arr4);

console.log("arr4.join() : " + arr4.join(" and "));

arr4.splice(0,1,"Wi");
console.log("arr4.splice() : " + arr4);

var arr5 = arr4.slice(3);
console.log("arr5 : " + arr5);

arr5.reverse();
console.log("arr5.reverse() : " + arr5);

var arr6 = arr4.sort();
console.log("arr4.sort() : " + arr6);

console.log("1 == \'1\' : " + (1=='1'));
console.log("1 === \'1\' : " + (1==='1'));

console.log("1 != \'1\' : " + (1!='1'));
console.log("1 !== \'1\' : " + (1!=='1'));