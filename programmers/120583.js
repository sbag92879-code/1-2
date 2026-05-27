function solution(array, n) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n){
            count += 1;
        }
    }
    return count;
}
console.log(solution([1, 1, 2, 3, 4, 5], 1))

