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
