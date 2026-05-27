function solution(my_string) {
    let answer = [];
    for (let i = 0; i < my_string.length; i++){
        for (let j = i + 1; j < my_string.length; j++){
            answer.push(my_string[i] * my_string[j])
        }
    }
 return Math.max(...answer);
}

console.log(solution([1, 2, 3, 4, 5]));