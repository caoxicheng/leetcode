class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let result = head;
  let temp: Array<ListNode | null> = [];
  let index: number = 1;
  let beforeItem: ListNode;
  let afterItem: ListNode;
  while (head !== null) {
    // 如果有前一项
    if (index === left - 1) {
      beforeItem = head;
    }
    // 如果有后一项
    if (index === right + 1) {
      afterItem = head;
    }
    if (index >= left && index <= right) {
      temp.unshift(head);
    }
    index++;
    head = head.next;
  }
  if (temp.length > 1) {
    let tempList = temp[0];
    let tempHead = temp[0];
    for (let i = 1 , l = temp.length; i < l ; ++i) {
      tempList.next = temp[i];
      tempList = tempList.next;
    }
    // 如果有后一项，则接入链表
    if (afterItem !== void 0) {
      tempList.next = afterItem;
    } else {
      tempList.next = null;
    }
    // 如果无前一线，则直接返回临时链表
    if (beforeItem === void 0) {
      return tempHead;
    }
    beforeItem.next = tempHead;
  }
  return result;
}
