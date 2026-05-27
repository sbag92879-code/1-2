const savedUser = '바깥유저';
function doA() {
    const savedUser = '저장된유저'
    console.log('전역 ' + savedUser);
}
doA();
console.log('전역 ' + savedUser);