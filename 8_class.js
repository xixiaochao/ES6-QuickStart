/** 类、继承 */

// 在es5中没有类的概念 构造函数
// es6 class
// 如何实现一个类？
// 类的继承 三种属性 公有属性(__proto__)、 私有属性 静态方法(静态属性)
function Parent(){
    // 构造函数中的this  通过new调用的 那么this指代的是实例
    this.name = 'parent';
}
Parent.prototype.eat = function(){
    console.log('eat');   
}
let parent = new Parent();

function Child(){
    this.age = 24;
    Parent.call(this);
}

// 二、继承公有属性
// ×：Child.prototype = Parent.prototype // 这个是兄弟关系 不是父子关系
// 1) Child.prototype.__proto__ = Parent.prototype;
// Object.setPrototypeOf(Child.prototype,Parent.prototype);

// 2) Child.prototype = Object.create(Parent.prototype) // 只继承公有

function create(parentPrototype){
    function Fn(){}
    Fn.prototype = parentPrototype;
    let fn = new Fn();
    for(let key in props){
        Object.defineProperty(Fn,key,{
            ...props[key],
            enumerable:true
        });
    }
    return new Fn();

}
Child.prototype = Object.create(Parent.prototype,{constructor:{value:Child}})
let child = new Child();
console.log(child.constructor);
// Object.create

let a = {};
Object.defineProperty(a,'name',{
    enumerable:true, // 表示这个属性是否可以被枚举出来
    consfigurable:true, // 表示这个属性是否可被删除
    //writable:true, // 表示这个属性是否可编辑
    get(){ // value可以替换成set和get
        console.log('get');
        return 1
    },
    set(val){
        console.log('设置值');
    }
});
console.log(a.name);
a.name = 200;


// let child = new Child();
// child.eat();
// 一、继承私有属性  Parent.call(this);
//console.log(child.name);

// 2)
//parent.__proto__.eat(); // 会先去找私有属性 找不到再去找公有属性
// 1)
//console.log(Parent.prototype.constructor === Parent); // true

// 继承公有属性和私有属性
Child.prototype = new Parent(); // 不会使用这种方式