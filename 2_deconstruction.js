/** 解构赋值 */

// 解构赋值 声明和赋值都放到一起了
// 解构 表示等号左边和右边解构类似
// 数组的必须位置相同
let [, age] = ["席小超", 24];

//对象解构时名字必须相同
let { length } = ["席小超", 24];
console.log(length);

//如果有关键字可以采用:的形式进行更改名字
let { name, age, default: d } = { name: "席小超", age: 24, default: "xxx" };
console.log(d);

// 如果想设置某个属性的默认值 必须采用=号的方式
let [,{address: [, a]},hobby='游泳'] = [
    { name: "席小超" }, 
    { age: 24, address: [1, 2, 3] }
];
console.log(hobby);

//解构的应用
function test(){
    return [1,2,3];
}
let [a,b,c] = test();
function ajax({url=new Error('url without'),type="get",data=xxx}){
    console.log(url,type,data);
}
ajax({
    url:'/test',
    type:'get',
    data:{}
})
