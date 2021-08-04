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
 * @return {number[][]}
 */
 var levelOrder1 = function(root) {
  var q1 = [root]
  var q2 = []
  var res = [[]]
  var tmp

  while (root || q1.length) {
    while (q1.length) {
      root = q1.shift()
      res[res.length-1].push(root.val)
      root.left && q2.push(root.left)
      root.right && q2.push(root.right)
    }
    if (q2.length) {
      tmp = q1
      q1 = q2
      q2 = tmp
      res.push([])
    }
  }

  return res
};

function push (root, level, res) {
  if (!root) return

  if (!res[level]) {
    res[level] = []
  }

  res[level].push(root.val)
  push(root.left, level+1, res)
  push(root.right, level+1, res)
}

var levelOrder2 = function (root) {
  var res = []

  push(root, 0, res)

  return res
}

var levelOrder = function (root) {
  var res = []

  if (!root) return res

  var q = [root]
  var length, i

  while (q.length) {
    res.push([])
    length = q.length
    for (i=0; i<length; i++) {
      root = q.shift()
      res[res.length-1].push(root.val)
      root.left && q.push(root.left)
      root.right && q.push(root.right)
    }
  }

  return res
}