/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var r = nums[0], c = 0

  nums.forEach(num => {
    if (num === r) {
      c++
    } else {
      c--
    }

    if (c < 0) {
      r = num
      c = 0
    }
  })

  return r
};