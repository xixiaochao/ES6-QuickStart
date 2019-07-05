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
console.log(result);

// 求和
let num = [{price:10},{price:20},{price:30}].reduce((prev,next,currIndex,ary) => {
    return prev+ next.price;
},0)
console.log(num);

//在原型上封装reduce，并且求和验证
Array.prototype.myReduce = function (fn,prev){
    for(let i = 0;i<this.length;i++){
        if(typeof prev === 'undefined'){
            prev = fn(this[ i ],this[ i+1 ], i+1, this)
        } else {

        }
    }
}
let sum = [1,2,3].myReduce((prev,next,currIndex,ary) => {
    return prev + next.price;
},0)
console.log(sum);


// Array.from();