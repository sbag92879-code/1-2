function solution(array, height) {
    let count= 0;
    for(let i = 0;i <= array.length; i++ ){
        if(array[i] > height){
             count += 1
        
        }
} 
     return count;
}

const result = solution([149, 180, 192, 170], 167);
console.log(result);