/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2) {
    return false
  }
  
  var list = []
  var map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  var i, tmp
  for (i=0; i<s.length; i++) {
    if (!list.length) {
      list.push(s[i])
    } else {
      tmp = list.pop()
      if (map[tmp] !== s[i]) {
        list.push(tmp)
        list.push(s[i])
      }
    }
  }

  return !list.length
};