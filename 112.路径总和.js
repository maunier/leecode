/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum1 = function(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right && root.val === targetSum) return true

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

var hasPathSum = function (root, targetSum) {
  if (!root) return false

  var stk = [], sum = 0, tmp, pre

  while (stk.length || root) {
    while (root) {
      stk.push(root)
      sum += root.val
      root = root.left
    }
    root = stk.pop()

    if (!root.right) {
      if (!root.left && sum === targetSum) {
        return true
      }
      sum -= root.val
      pre = root
      root = null
    } else if (root.right === pre) {
      sum -= root.val
      pre = root
      root = null
    } else {
      stk.push(root)
      root = root.right
    }
  }

  return false
}