function solution(n, k) {
let service = Math.floor(n / 10);
let total = (n * 12000) + ((k - service) * 2000);
return total;


}
console.log(solution(10, 3));