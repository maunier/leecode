function _isSymmetric (root1, root2) {
  if (root1 && root2) {
    if (root1.val !== root2.val) {
      return false
    }
    return _isSymmetric(root1.left, root2.right) && _isSymmetric(root1.right, root2.left)
  } else if (root1 === null && root2 === null) {
    return true
  } else {
    return false
  }
}

var isSymmetric1 = function(root) {
  if (!root) return true
  return _isSymmetric(root.left, root.right)
};

var isSymmetric2 = function (root) {
  if (!root || (!root.left && !root.right)) return true
  if (!root.left || !root.right) return false

  var q = [root.left, root.right], res, size, i
  while (q.length) {
    size = q.length
    res = []
    for (i=0; i<size; i++) {
      root = q.shift()
      res.push(root ? root.val: null)
      root && q.push(root.left)
      root && q.push(root.right)
    }
    for (i=0; i<size/2; i++) {
      if (res[i] !== res[res.length-i-1]) {
        return false
      }
    }
  }
  return true
}

var isSymmetric  = function (root) {
  if (!root) return true
  var q = [root.left, root.right], root1, root2
  
  while (q.length) {
    root1 = q.shift()
    root2 = q.shift()
    if (!root1 && !root2) continue;
    if (!root1 || !root2 || root1.val !== root2.val) return false;
    q.push(root1.left)
    q.push(root2.right)
    q.push(root1.right)
    q.push(root2.left)
  }

  return true
}