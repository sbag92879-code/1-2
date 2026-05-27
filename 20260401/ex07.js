function solution(start_num, end_num) {
    var sum = [];
while (start_num <= end_num) {
   sum.push(start_num);
   start_num++;
}
return sum;
}
console.log(solution(3, 10));