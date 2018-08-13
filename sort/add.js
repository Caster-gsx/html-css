let sum = 0;
function add(num){
    sum = sum +num;
    while(num > 99) {
        return;
    }
    add(num + 1);
    return sum;
}
console.log(add(1));