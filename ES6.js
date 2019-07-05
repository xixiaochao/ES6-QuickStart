/**
 * Created by Administrator on 2018/5/31.
 */
//1.解构赋值 ->即声明又定义
/*let a = [10,35,5];
 let a1 = a[0]
 let a2 = a[1]
 let a3 = a[2];*/
//数组的解构赋值 有顺序的 ，若不需要的在左边以空项表示就可以
/*let [a,,c] = [10,35,5];
 console.log(a,c);*/

//解构时还可以设置默认时,用=来设置默认值
//let [a,,c=60] = [10,35];
/*let [a,[p,c],d] = [10,[5],7];
 console.log(a,p,c,d);*/

//对象的解构赋值 : 重新命名 = 设置默认值
/*let obj = {name:"zf",age:8};
 //let {name,age} = obj; //左边变量名要和对象的属性名一样才能拿到对应的值
 let {name:n,age,address="东大街"} = obj;
 console.log(n,age,address);*/

//嵌套的解构赋值
/*let [{name,age},address] = [{name:"zf",age:8},"回龙观"];
 console.log(name,age,address);*/

//解构赋值用途
//1.交换值
let  x = 10;
 let  y = 20;
 [y,x] = [x,y];
 console.log(x,y);

 //2.获取方法返回的对象里属性的值
 let utils = (function(){
 function listToAry(){}
 function toJSON(){}
 return {
 listToAry:listToAry,
 toJSON:toJSON
 }
 })();
 let {listToAry,toJSON} = utils;

 //3.简写  利用对象解构赋值存值
 let name = "lily";
 let age = 10;
 let obj = {
 name,
 age,
 address:"回龙观东大街"
 };

//  ...拓展运算符  展开运算符  剩余运算符

//对象和数组  克隆，合并

let ary1 = [10, 20];
let ary2 = [30, 15];
/*ary1.concat(ary2);*/

/*let ary = [...ary1,...ary2,10,20];
 console.log(ary);*/
//克隆ary1;
/*let [...arr] = ary1;
 console.log(arr);

 let obj1 = {name:"zf"};
 let obj2 = {age:8};
 //let obj = {...obj1,...obj2,address:"东大街"};
 //let obj = Object.assign(obj1,obj2);//这个跟上面展开运算符方式合并一样
 let obj = {...obj1};
 console.log(obj);*/

//剩余运算符
/*function fn(a,b,...arr){
 // console.log(arr instanceof Array);
 console.log(arr);
 }
 fn(10,20,5,15);*/


//箭头函数
/*
 function fn(a,b) {
 return a;
 }
 */

//=>左边写参数(多个参数拿小括号包起来) 右边表示函数体的内容 (若有多行内容，拿大括号包起来)
let fn = (a,b) => {
    let total  =null;
    total = a+b;
    return total;
}
console.log(fn(10, 20));

/*ary.sort(function(a,b){
 return a-b;
 })

 ary.sort((a,b)=>a-b);*/

//形参可以赋默认值
function ajax(x=10,y) {

}
/*function ajax({url="/",method="get"}){

 }*/
//若传的参数是对象或数组，可以解构赋值
/*
 let ajax = ({url="/",method="get"})=>{

 };
 ajax({method:"post"});
 */

//箭头函数没有this
/*let obj = {
 fn:(function(){
 return function(){
 console.log(this);
 }
 })()
 };*/
let obj = {
    fn:(function(){
        return ()=>{
            console.log(this);
        }
    })()
};
obj.fn();

function fn1(){
    /* var that = this;
     setTimeout(function(){
     // that
     console.log(this); //window
     //在定时器里要操作fn1里的this
     },1000)*/
    setTimeout(()=>{
        console.log(this);
    },1000)
}
fn1.call({});
//箭头函数没有this,会往上级作用域找，若有则拿过来，没有继续往上找，直到找到window
//箭头函数里没有arguments
//不能把箭头函数当成构造函数使用
//call,apply,bind这些方法也不能用

/**
 * Created by Administrator on 2018/7/31.
 */
let ary=[45,23,64];

/*
//=>传统的取值赋值操作
let a=ary[0],
    b=ary[1],
    c=ary[2];
console.log(a, b, c);*/

//let [a,b,c] =[12,23,34];
console.log(a,b,c);
