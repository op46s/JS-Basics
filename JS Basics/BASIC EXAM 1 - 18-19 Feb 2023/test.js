var twoSum = function (nums, target) {

    let print = new Array();

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {

                if (nums[i] === nums[j]) {
                print.push(nums.indexOf(nums[i]), nums.indexOf(nums[i+1]));
                return print;
                }
                console.log(nums.indexOf(nums[i]), nums.indexOf(nums[j]))
                print.push(nums.indexOf(nums[i]), nums.indexOf(nums[j]));
                return print;
            }       
        }
    }
}
twoSum([2, 7, 11, 15], 9);
//twoSum([3, 2, 4], 6);
//twoSum([3, 3], 6);

