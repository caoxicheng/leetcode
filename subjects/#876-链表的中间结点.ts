/**
 * Definition for singly-linked list.
 */
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function middleNode(head: ListNode | null): ListNode | null {
    let slow: ListNode | null = head, fast: ListNode | null = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;

};
