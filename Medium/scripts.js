var nums = [4,5,6,7,0,1,2];
var get = 0;

function checkNums(nums) {
    return get === nums;
}

let indexed1 = nums.findIndex(checkNums)

console.log(indexed1)

var nums = [4,5,6,7,0,1,2];
var get = 3;

function checkNums(nums) {
    return get === nums;
}

let indexed = nums.findIndex(checkNums)

console.log(indexed)