let aTest = Array.from('foo');
// expected output: Array ["f", "o", "o"]
console.log(aTest);

console.log(Array.from([1, 2, 3], x => x + x));

function combine(){ 
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组 
    return Array.from(new Set(arr));
} 

var m = [1, 2, 2], n = [2,3,3]; 
console.log(combine(m,n));                     // [1, 2, 3]

console.log(Array.isArray(m));
console.log(m instanceof Array);