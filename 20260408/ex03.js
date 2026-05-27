const aa = function(a,b=20,c=30) {
    console.log(`a ${a} b ${b} c ${c}`)
}
aa(10);

let temp = '값을할당';
temp = temp ?? "앞에꺼 null, undefined";
console.log(`temp ${temp}`);

