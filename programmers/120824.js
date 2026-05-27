function solution(num_list) {
    let answer = [0, 0];
    //num_list[i]홀수이면.. answer 1번째 값 증가
    //짝수이면 0의 수 증가
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            answer[0] += 1;

        }else{
            answer[1] += 1;
        }

    }
    return answer;
}


console.log(solution([1, 3, 5, 7]));