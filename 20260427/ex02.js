function solution(n, numlist) {
    let answer = [];
    for(let i = 0; i < numlist.length; i ++ ){
         if (numlist[i] % n === 0){
            answer.push(numlist[i]);
         }
    }
    return answer;
}

console.log(solution(3, [4,5,6,7,8,9,10,11,12]));