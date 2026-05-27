function solution(start_num, end_num) {
    const answer = []; // let 기본자료형 변경 가능 - const 기본자료형 변경 불가 오브젝트형은 변경 가능
    console.log(start_num, end_num);
    for(let i = start_num; i <= end_num; i++){
       console.log( `i = ${i}`)
         answer.push(i);
    }
    console.log(answer);
    return answer;
}
// 만약 3, 5  입력했으면 배열 [3, 4, 5]변환
// 만약 1, 3  입력했으면 배열 [1, 2, 3]변환

const result = solution(3, 5);
console.log(result);