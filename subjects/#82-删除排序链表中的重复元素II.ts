class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head;
  }
  // 创建一个虚拟头节点
  let top: ListNode | null = new ListNode();
  top.next = head;
  top.val = undefined;
  let same: number = undefined;
  let pre: ListNode | null = top,
    curr: ListNode | null = head,
    next: ListNode | null = head.next;

  while (next !== null) {
    // 判断当前数据和下一个数据是否相同，或者是否和已经删除的重复数据相同
    // true => 记录这个重复数字，跳过这两个节点，直接绑定下一个节点的下一个节点
    // false => 三节临时节点依次后移
    if (curr.val === next.val || same === curr.val) {
      same = curr.val;
      pre.next = next;
      curr = next;
      next = curr.next;
    } else {
      same = undefined;
      pre = curr;
      curr = curr.next;
      next = curr.next;
    }
  }
  // 校验最后一个是否重复 
  if (same === curr.val) {
    pre.next = null;
  }

  return top.next;
}
