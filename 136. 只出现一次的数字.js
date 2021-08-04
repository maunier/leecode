/**
 * 思路2： 异或
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var map = {}
  nums.forEach(num => {
    if (map[num]) delete map[num]
    map[num] = 1
  })
  return Object.keys(map)[0]
};