/** 类的编译-es5 */

// 类的调用检测 检测实例是不是new处理的
function _classCallCheck(instance,constructor){
    if(!(instance instanceof constructor)){
        throw new Error("Class constructor Child cannot be invoked without 'new'");
    }
}
/**
 * 
 * @param {*} constructor 构造函数
 * @param {*} protoPropertys 原型方法的描述
 * @param {*} staticPropertys 静态方法的描述
 */
function _createClass(constructor,protoPropertys,staticPropertys){
    if(protoPropertys.length > 0){
        definePropertys(constructor.prototype,protoPropertys);
    }
    if(staticPropertys.length > 0){
        definePropertys(constructor.prototype,staticPropertys);
    }
}
function definePropertys(target,arr){
    for(let i = 0;i < arr.length;i++){
        Object.defineProperty(target,arr[i].key,{
            ...arr[i],
            enumerable:true, // 表示这个属性是否可以被枚举出来
            consfigurable:true, // 表示这个属性是否可被删除
            writable:true, // 表示这个属性是否可编辑
        });
    }
}
let Parent = function(){
    //写逻辑
    function P(){
        _classCallCheck(this,P);
        this.name = 'parent';
        return {}
    }
    _createClass(P, // 属性描述器
        [ 
            {
                key:'eat',
                value:function(){
                    console.log('吃');
                }
            }
        ],
        [
            {
                key:'b',
                value:function(){
                    return 2;
                }
            }
        ]
    )
    return P;
}();

let Child = (function(Parent){
    // 先实现继承父类的公有属性和静态方法
    _inherits(C,Parent);
    function C(){
        _classCallCheck(this,C);
        let obj = Parent.call(this);
        let that = this;
        if(typeof obj === 'object'){
            that = obj;
        }
        that.age = 24; // 解决了父类返回一个引用类型的问题
        return that;
    }
    return C;
})(Parent);
let child = new Child();
console.log(child);


// 子类继承父类
function _inherits(subClass,superClass){
    // 继承公有属性
    subClass.prototype = Object.create(superClass.prototype,{constructor:{value:subClass}});
    // 继承静态方法
    Object.setPrototypeOf(subClass,superClass);
}