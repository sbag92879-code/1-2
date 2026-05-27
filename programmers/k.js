// function solution(dot) {
//    if(dot[0] > 0 && dot[1] > 0){
//     return 1;
//    }
//    if(dot[0] < 0 && dot[1] > 0){
//     return 2;
//    }
//    if(dot[0] < 0 && dot[1] < 0){
//     return 3;
//    }
//    else{
//     return 4;
//    }
// }
// console.log(solution([-7,9]));

// function solution(array) {
//    let answer = [];
//     answer.push(Math.max(...array));
//     answer.push(array.indexOf(Math.max(...array)));



// return answer;
// }

// console.log(solution([1, 8, 3]));


// function solution(n) {
//     let answer = [];
//   for(let i = 1; i <= n; i++){
//     for (let j = n; j >= i; j--){
//         if (i * j === n){
//             if (i === j){
//                 answer.push(i)

//             }else{
//                 answer.push(i, j);
//             }
//         }
//     }
//   }
//   return answer.sort((a,b) => a - b);
// }

// console.log(solution(16));


// function solution(num_list, n) {
//     let answer = [];
//     for (let i = 0; i < num_list.length; i+=n){
//          answer.push(
//         num_list.slice(i, i + n)
//     );
//     }
        
   

//     return answer;
// }
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));