function solve(nums) {

    let condensed = [];

    if (nums.length === 1) {
        console.log(nums[0]);
    } else {
        while (condensed.length !== 1) {

            for (let i = 0; i < nums.length - 1; i++) {
                condensed[i] = nums[i] + nums[i + 1]
            }
            condensed.length = nums.length - 1
            nums = condensed;
        }
        console.log(condensed[0]);    
    }
}

solve([2, 10, 3])