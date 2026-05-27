function solution(numbers, num1, num2) {
    var answer = [];
    for(let i = num1; i <= num2; i++) {
        answer.push(numbers[i]);
    }
    return answer;
}
const result = solution([1, 2, 3, 4, 5], 1, 3);
console.log(result);
