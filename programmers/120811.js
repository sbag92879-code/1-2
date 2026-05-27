function solution(array) {

    let sortNumber = array.sort((a, b) => a - b);
    return sortNumber[Math.floor(array.length / 2)];
 }
    

console.log(solution([9, -1, 0]));

