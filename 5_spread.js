/** 展开运算符 */

function spread(x,...args){
    sum(...args) //展开运算符
}
function sum(a,b,c,d){
    console.log(a,b,c,d);
}
spread('x',1,2,3,4);

//let arr = [1,2,3,4].concat(5,6,7); // es5
let arr = [...[1,2,3,4], ...[5,6,7]];  // es6
console.log(arr);
Math.min(...[1,2,3,4]);
console.log(...[1,2,3,4]);

//...是浅拷贝
let name = {name:'席小超'};
let age = {age:24};
let school = {...name,...age};
console.log(school);

// 此段代码中的slice是深拷贝还是浅拷贝?
let b = [1,2,3];
let a = [b];
let c = a.slice(0);  // slice是一个浅拷贝 如果拷贝一层是深拷贝
b[0] = 100;
console.log(c);

// 深拷贝的实现(都会变成对象，还不支持函数。。。。)
let obj = {a:1,fn:function(params){},t:/a/,d:new Date()};
console.log(JSON.parse(JSON.stringify(obj)));

// 实现深拷贝 保留继承关系 可以实现各种类型的拷贝 实现递归拷贝
function deepClone(obj){
    if(typeof obj !== 'object') return obj;
    if(obj == null) return null;
    if(obj instanceof Date) return new Date(obj)
    if(obj instanceof RegExp) return new RegExp(obj);
    Object.prototype.toString.call(obj) === '[object Array]'
    let o = new obj.constructor(); //保留类的继承关系
    for(let key in obj){
        o[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
    return o;
}
console.log(deepClone({a:{a:1}}));