function solution(strlist) {
    var answer = [];
   for(let i= 0; i < strlist.length; i++){
    // console.log(strlist[i]);
    answer.push(strlist[i].length)
   }
   return answer;
}

const ret = 
solution(['we','are','the','world!'])
console.log(ret);