let sum = 0;
function solution(n) {
  for(let i =1; i <= n; i++){
    if (i % 2 === 0) {
        sum += i;
    }
  }
  return sum;
}
console.log(solution(4));