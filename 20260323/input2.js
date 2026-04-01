const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('입력하세요\n', function (ans) {
    console.log(ans);
    // 나누었을때 나머지가 0이면 짝수야
    if (ans >= 60) {
        console.log('합격입니다.');
    } else {
        console.log('불합격입니다.')
    }
    rl.close()
});