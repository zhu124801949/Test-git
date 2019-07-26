//拼接数组中的某个元素（该元素是个object）中的某个属性
let aPerson = [{a:1001},{a:1002},{a:1003}];
let aPersonNew = aPerson.map(oItem =>{
    return oItem.a;
});
let sPerson = aPersonNew.join(",");
console.log(sPerson);

//对象copy
let aPersonCopy = [];
Object.assign(aPersonCopy,aPerson);
aPersonCopy.map(oItem =>{
    console.log(oItem.a);
});
//清空数组
aPersonCopy = [];
Object.assign(aPersonCopy,aPerson);

aPersonCopy.map(oItem =>{
    console.log(oItem.a);
});
console.log("清空数组");
aPersonCopy.length = 0;
aPersonCopy.map(oItem =>{
    console.log(oItem.a);
});

var arr = ["a", "b", "c"]; 
var iterator = arr.entries();
console.log(iterator.next());

var arr = ["a", "b", "c"];
var iter = arr.entries();
var a = [];

// for(var i=0; i< arr.length; i++){   // 实际使用的是这个 
for(var i=0; i< arr.length+1; i++){    // 注意，是length+1，比数组的长度大
    var tem = iter.next();             // 每次迭代时更新next
    console.log(tem.done);             // 这里可以看到更新后的done都是false
    if(tem.done !== true){             // 遍历迭代器结束done才是true
        console.log(tem.value);
        a[i]=tem.value;
    }
}
    
console.log(a);                         // 遍历完毕，输出next.value的数组
