//选择排序 时间复杂度O(n^2)
// 找到数组中的最小值，并将其放到第一位，然后找到第二小的值放到第二位……以此类推
// function selectionSort(arr){
//     let len = arr.length;
//     for(let i = 0;i<len;i++){
//         let min = i;
//         for(let j =i;j<len;j++){
//             if(arr[j]<arr[i]){
//                 min=j;
//                 [arr[min],arr[i]] = [arr[i],arr[min]];
//             }
//         }
//     }
//     return arr;
// }
// console.log(selectionSort([10,2,5,3,8,6,9,5,12,7]))



// 找到数组中最小的值放到第一位  第二小的放在第二位
function insertionSort(arr) {
    let len = arr.length;
    for(let i =0; i<len;i++) {
        let min = i;
        for(let j =i;j<len;j++) {
            if(arr[j]<arr[i]) {
                min = j;
                [arr[min], arr[i]] = [arr[i], arr[min]];
            }
        }
    }
    return arr;
}
console.log(insertionSort([12,6,3,20,56,34,1,18]))








