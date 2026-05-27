function solution(arr, delete_list) {
    answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (!delete_list.includes(arr[i])) {
            answer.push(arr[i]);
        }

    }
    return answer;
}
//arr 안에 있는거랑 
//delete_list 안에있는거를
//arr[0] delete_list 0~5 
//arr[0]째와 delete_list[0]
//arr[1] delete_list 0~5


console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]))