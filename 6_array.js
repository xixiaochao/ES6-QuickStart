/** 数组的方法 */

// 数组的常见方法
// map (some,every,filter,forEach) es5
// find findIndex es6
// reduce 收敛 叠加
// for of for in 

// 1、reduce 返回的结构时叠加后的结果
// 函数的返回结果会作为下一次循环的prev
let result = [1,2,3,4,5].reduce((prev,next,currIndex,ary) => {
    console.log(prev,next,currIndex,ary);
    if(currIndex === ary.length-1){
        return (prev+next) / ary.length; // 求平均数
    }
    return prev+next
})
console.log(result); // 3

// 求和
let num = [{price:10},{price:20},{price:30}].reduce((prev,next,currIndex,ary) => {
    return prev+ next.price;
},0)
console.log(num); // 60

//在原型上封装reduce，并且求和验证
Array.prototype.myReduce = function (fn,prev){
    for(let i = 0;i<this.length;i++){
        if(typeof prev === 'undefined'){
            prev = fn(this[i],this[i+1], i+1, this);
            ++i;
        } else {
            prev = fn(prev,this[i],i,this);
        }
    }
    return prev;
}
let sum = [1,2,3].myReduce((prev,next,currIndex,ary) => {
    return prev + next;
},0)
console.log(sum); // 6

let flat = [[1,2,3],[4,5,6]].reduce((prev,next,currIndex,ary) => {
    return [...prev,...next];
})
console.log(flat); // [ 1, 2, 3, 4, 5, 6 ]

// 2、forEach
Array.prototype.forEach = function (fn){
    for(let i = 0;i<this.length;i++){
        fn(this[i],i);
    }
};
[1,2,3].forEach((item,index) => {
    console.log(item,index);
})

// 3、map返回值 返回值是一个新数组
Array.prototype.map = function (fn){
    let arr = [];
    for(let i = 0;i < this.length;i++){
        arr.push(fn(this[i],i));
    }
    return arr;
}
let arr = [1,2,3].map((item) => {
    return item * 2;
})
console.log(arr);

// 4、filter 过滤 如果返回true表示留下 返回false表示删除
let ary = [1,2,3];
let filterArr = ary.filter(item => {
    return item > 2;
})
console.log(filterArr);

// 5、find 查找 它会返回查找的那一项 没有返回undefined 找到后就不会继续查找了
let f = [1,2,3].find(item => {
    return item === 5;
})
console.log(f);

// 6、some 找到后返回true,找false可以用every
let s = [1,2,3].every(item => {
    return item ===2
})
console.log(s);

// 7、includes
console.log([1,2,3].includes(3));


// Array.from();

// 希望将类数组转化成数组
// 常见的类数组有 htmlCollection arguments {0:1,1:2,2:3,length:3}
function a(){
    console.log(eval(Array.from(arguments).join('+')));
}
a(1,2,3)

// of()
let arry = Array.of(3);
console.log(ary); // [3] 

// copywithin