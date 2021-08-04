var deleteDuplicates1 = function(head) {
  if (!head) return head

  var cur = head

  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return head
};

var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head
  }

  var r = deleteDuplicates(head.next)
  
  if (head.val === r.val) {
    return r
  } else {
    head.next = r
    return head
  }
}