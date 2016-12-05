// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// -------------------------------------------------------------

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Using Hash map
var twoSum = function(nums, target) {
    var dic = {};
    var diff, ret;
    var size = nums.length;
    
    for (i = 0; i < size; i++) {
        diff = target - nums[i];
        if (diff in dic) { 
            return [dic[diff], i]; 
        }
        else { 
            dic[nums[i]] = i; 
        }
    }
};