const obj = {
    boy: "소년",
    girl: "소녀",
    friend: "친구",
}
 
obj.age = 17; // 추가

obj.friend = "하이"; // 수정

delete obj.boy; // 삭제

let result = "friend" in obj;

console.log(obj);
console.log(obj['friend']);
console.log(obj.friend);
console.log(result);
console.log(obj.age);