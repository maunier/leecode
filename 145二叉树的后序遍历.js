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
var postorderTraversal1 = function(root) {
  var res = []
  if (!root) return res

  res = postorderTraversal(root.left).concat(postorderTraversal(root.right))
  res.push(root.val)

  return res
};

var postorderTraversal2 = function (root) {
  var res = []
  var stk = []
  var cur = root

  while (stk.length || !cur.walked) {
    while (cur && !cur.walked) {
      stk.push(cur)
      cur = cur.left
    }
    
    cur = stk.pop()
    if (cur.right && !cur.right.walked) {
      stk.push(cur)
      cur = cur.right
    } else {
      res.push(cur.val)
      cur.walked = true
      cur = stk.pop()
      if (cur) {
        cur.left = null
      }
    }
  }

  return res
}

var postorderTraversal = function (root) {
  var res = []
  var stk = []
  var pre = null
  var cur = root

  while (stk.length || cur) {
    while (cur) { // 走到最左
      stk.push(cur)
      cur = cur.left
    }

    cur = stk.pop()
    if (!cur.right || pre === cur.right) { // 往回走
      res.push(cur.val)
      pre = cur
      cur = null
    } else { // 往下走
      stk.push(cur)
      cur = cur.right
    }
  }

  return res
}