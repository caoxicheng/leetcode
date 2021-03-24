interface ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null): void;
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }

  let nodeA = headA;
  let nodeAEnd, nodeBEnd;
  let nodeB = headB;
  while (nodeA !== nodeB) {
    if (nodeA.next === null) {
      nodeAEnd = nodeA;
      nodeA = headB;
    } else {
      nodeA = nodeA.next;
    }

    if (nodeB.next === null) {
      nodeBEnd = nodeB;
      nodeB = headA;
    } else {
      nodeB = nodeB.next;
    }

    if (nodeAEnd !== void 0 && nodeBEnd !== void 0 && nodeAEnd !== nodeBEnd) {
      return null;
    }
  }
  return nodeA
}
