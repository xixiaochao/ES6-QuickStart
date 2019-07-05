/** 对象 */

let name = {name:'席小超'};
let age = {age:24};
let obj = Object.assign(name,age); // 浅拷贝
console.log({...name,...age});

// __proto__ 链
// 在es6中可以在对象内 直接操作__proto__
let obj1 = {name:'席小超'};
let obj2 = {age:24};
// obj1.__proto__ = obj2;
Object.setPrototypeOf(obj1,obj2);
console.log(Object.getPrototypeOf(obj1));

let pro = {
    name:'席小超',
    getPName(){ // 可以通过super关键字获取到父属性
        return super.name;
    },
    __proto__:pro1
}
let pro1 = {
    name:'xc',
    age:24
}
console.log(obj.getPName());

