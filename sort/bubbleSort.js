//冒泡排序 时间复杂度O(n^2)， 最好O(n)
function bubbleSort(arr) {
    let len = arr.length;
    for(let i=0; i<len;i++) {
        for(let j=0; j<len-1-i;j++){
            if(arr[j] > arr[j+1]){
                [arr[j+1],arr[j]] = [arr[j], arr[j+1]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([1,32,45,4,56,4,56,7,9,2,2]));