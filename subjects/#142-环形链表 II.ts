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


// @ts-ignore
let map: Map<ListNode | null, number> = new Map();
function detectCycle(head: ListNode | null): ListNode | null {
    while (head !== null) {
        if (map.has(head)) {
            return head;
        } else {
            map.set(head, true);
        }
        head = head.next;
    }
    return null;
};
