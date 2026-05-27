
// function solution(n) {
//     let count = 0;
//     for (let i = 0; i <= n; i++) {
//          for (let j = 0; j <= n; j++) {
//             if (i *j ===n){
//                 count += 1
//             }
//         }
        
//     }
//      return count;
// }

// console.log(solution(20));

function solution(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count++;
    }
    return count;
}
console.log(solution(20));