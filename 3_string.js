/** 模板字符串 */

// es6 模板字符串 特殊的字符串
// 模板字符串取代了原有的字符串拼接功能
let name = '席小超';
let age = 24;
//  hello，席小超今年24岁了

//let str = 'hello,'+name+'今年'+age+'岁了';
let str = `hello,${name}今年${age}岁了`;
console.log(str);

// 可以支持换行 可以支持取值
let ul = `<ul><li>${name}</li><li>${age}</li></ul>`;
// let ul = '<ul>'+
//     '<li>'+name+'</li>'
//     '<li>'+age+'</li>'
// +'</ul>';
console.log(ul);

// 如何自己实现一个类模板字符串的功能？
let namec = '席小超';
let agec = 24;
let strc = 'hello,${name}今年${age}岁了';
strc = strc.replace(/\$\{([^}]*)\}/g,function(){
    return eval(arguments[1]);
});
console.log(strc);

// 带标签的模板字符 自定义模板字符串的实现？
let name = '席小超';
let age = 24;
function jw(){ // 第一个参数是字符串的数组 第二个参数是第一个变量
    let strings = arguments[0];
    let values = [].slice.call(arguments,1);
    let str = '';
    for(let i = 0; i<values.length;i++){
        str+=`${strings[i]}*${values[i]}*`;
    }
    str += strings[strings.length - 1];
    return str;
}
let str = jw`hello,${name}今年${age}岁了`;
console.log(str);

// includes 是否包含
let url = 'http://ww.zhufengpeixun.cn/logo.png';
console.log(url.includes('zhufengpeixun'));
// startsWith 以xxx开头
console.log(url.startsWith('http://'));
// endsWith 以xxx结尾
console.log(url.endsWith('.png'));
// padStart padEnd 补全
// 进制转化
setInterval(function(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let str = `${hour.toString().padStart(2,0)}:`;
    str += `${minutes.toString().padStart(2,0)}:`;
    str += `${seconds.toString().padStart(2,0)}`;
    console.log(str);
},1000)
