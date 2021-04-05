class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let beforeList = new ListNode(undefined, head);
  let before = beforeList;

  while (head !== null) {
    if (head.val === val) {
      head = head.next;
      before.next = head;
    } else {
      before = head;
      head = head.next;
    }
  }

  return beforeList.next;
}
