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
var inorderTraversal1 = function(root) {
  var res = []

  if (!root) return res
  res = inorderTraversal(root.left)
  res.push(root.val)
  return res.concat(inorderTraversal(root.right))
};

var inorderTraversal = function (root) {
  var res = []
  var stk = []
  var cur = root

  while (stk.length || cur) {
    while (cur) {
      stk.push(cur)
      cur = cur.left
    }
    cur = stk.pop()
    res.push(cur.val)
    cur = cur.right
  }

  return res
}