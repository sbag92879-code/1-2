
function solution(num1, num2) {
    return parseInt(num1/num2*1000);  //parseInt 값을 정수로 표현 (소수점을 버림)
}
const result = solution(1, 16);
console.log(result);