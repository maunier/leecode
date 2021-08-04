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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var stk = []
  var cur = root
  var res = []

  while (stk.length || cur) {
    while (cur) {
      stk.push(cur)
      res.push(cur.val)
      cur = cur.left
    }
    cur = stk.pop()
    cur = cur.right
  } 

  return res
};