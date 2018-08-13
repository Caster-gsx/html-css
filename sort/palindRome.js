// js判断一个字符串是否是回文字符串
// 回文字符串：即字符串从前往后读和从后往前读字符顺序是一致的。

// function palindRome(str) {
//     let len = str.length;
//     let str1 = '';
//     for(let i = len-1; i>=0;i--) {
//         str1 = str1+str[i];
//     }
//     return str1 === str;
// }
// console.log(palindRome('abccba'))

function palindRome(str){
    var len = str.length;
    for(var i=0; i<len;i++) {
        if(str.charAt(i) !== str.charAt(len-1-i)){
            return false
        }else{
            return true
        }
    } 
}
console.log(palindRome("abcba"));
console.log(palindRome("abcbac"));


// 字符串分隔，倒转，聚合[...obj].reverse().join('')