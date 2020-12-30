let a = {a:123};
let b = {b:456};
let c = 789;
//console.log(a,b,c)
console.log('index.js')
let d = {d:"dddddd"}

//cmd/amd/common.js/requier.js
export {a};
export {b};
export {d}

//模块的内容导出
//整个文件默认导出a对象
export default c;