class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  let underHead = new ListNode(-1, head);
  let len: number = 1;
  while (head.next !== null) {
    ++len;
    head = head.next;
  }
  // 首尾相连
  head.next = underHead.next;
  head = underHead.next;

  k = len - (k % len);
  while (k >= 0) {
    if (k == 1) {
      let temp = head;
      head = head.next;
      temp.next = null;
    } else if (k === 0) {
      underHead.next = head;
    } else {
      head = head.next;
    }
    --k;
  }

  return underHead.next;
}
