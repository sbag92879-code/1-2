// parseInt 정수변환
// Math.floor 내림
// Math.round 반올림
// Math.ceil 올림
function solution(price) {
    if(price >= 500000){
       return parseInt(price * 0.8);
    }else if (price >= 300000){
        return parseInt(price * 0.9);
    }else if( price >= 100000){
        return parseInt(price * 0.95);
    }else{
        return price;
    }
}

console.log(solution(580000));