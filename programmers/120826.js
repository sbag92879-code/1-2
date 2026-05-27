function solution(my_string, letter) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] != letter)
            answer += my_string[i]
    }

    return answer;
}
// my_string[i] != f true이면 answer에 넣고
//false 이면 answer 넣지 않고

const result = solution('abcdef', 'f') //'abcde'
console.log(result);