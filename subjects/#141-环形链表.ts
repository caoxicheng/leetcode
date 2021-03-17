class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  
  const stack = new WeakMap();

  return (function loop (head) {
    if (head === null) {
      return false
    }
    if (!stack.has(head)) {
      stack.set(head, true);
      return loop(head.next);
    } else {
      return true;
    }
  })(head)
}
