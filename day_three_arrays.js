let nums = [2, 3, 6, 6, 5];

function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function(x, y) {return x < y;});
    const m = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[0] == m) {
            nums.splice(0, 1);
        }
    }
    return nums[0];
}

console.log(getSecondLargest(nums)) ;