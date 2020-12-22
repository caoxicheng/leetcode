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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let map: Map<number, boolean> = new Map();

  let result: ListNode = head;
  let previous: ListNode = head;
  while(head !== null) {
    if (map.has(head.val)) {
      previous.next = head.next;
    } else {
      map.set(head.val, true);
      previous = head;
    }
    head = head.next;
  }
  return result;
};