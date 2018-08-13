// 插入排序

// function insertionSort(arr) {
//     let len = arr.length;
//     for(let i=1; i< len; i++) {
//         let j = i;
//         while(j > 0 && arr[j-1] > arr[j]){
//             [arr[j-1],arr[j]] = [arr[j],arr[j-1]];
//             j--;
//         }  
//     }
//     return arr;
// }
// let arr = [23, 5, 9, 21, 28, 12, 6, 2, 0]
// console.log(insertionSort(arr));

// 插入的位置m
// 把m位置的牌跟前面的0， (m-1)进行比较  如果小于交换一下位置

function insertionSort(arr) {
    console.time('InsertionSort');
    let len = arr.length;
    for(let i=1; i<len; i++) {
        let j = i;
        let tmp = arr[i];
        while(j > 0 && arr[j-1] > tmp) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = tmp;
    }
    console.timeEnd('InsertionSort');
    return arr;
}
let arr = [23, 5, 9, 21, 28, 12, 6, 2, 0];
console.log(insertionSort(arr));

var a = [1,2];
[a[0], a[1]] = [a[1], a[0]];
console.log(a);

