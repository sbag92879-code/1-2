let dic = new Object();

dic.girl = "소녀";
dic.boy = "소년";
dic.freind = "친구";
dic.doA = function(){
    console.log('doA 함수');
}

console.log(dic);
console.log(dic.girl);
console.log(dic.boy);
console.log(dic.freind);

console.log(dic.doA);
dic.doA();