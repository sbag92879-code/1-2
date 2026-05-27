function solution(arr, delete_list) {
    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        let result = true;

        for (let j = 0; j < delete_list.length; j++) {
            if (arr[i] == delete_list[j]) {
                result = false;
                break; 
            }
        }

        if (result) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

const ret = solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]);
console.log(ret);