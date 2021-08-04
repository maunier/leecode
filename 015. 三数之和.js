/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var r = [], i, m, n
  
  nums.sort((a, b) => a - b)
  for (i=0; i<nums.length-2;) {
    for (m=i+1,n=nums.length-1; m<n;) {
      if (nums[i] + nums[m] + nums[n] === 0) {
        r.push([nums[i], nums[m], nums[n]])
      }

      if (nums[i] + nums[m] + nums[n] <= 0) {
        do {
          m++
        } while (nums[m] === nums[m-1])
      } else {
        n--  
      }
    }
    
    do {
        i++
    } while (nums[i] === nums[i-1])
  }

  return r
};
