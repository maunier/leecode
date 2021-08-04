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
 * @return {number}
 */
var maxDepth1 = function(root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

var maxDepth = function (root) {
  var q = [root], res = 0, size, i
  if (!root) return res

  while (q.length) {
    size = q.length
    res++
    for (i=0; i<size; i++) {
      root = q.shift()
      root.left && q.push(root.left)
      root.right && q.push(root.right)
    }
  }

  return res
}

