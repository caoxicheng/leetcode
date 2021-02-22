class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  function check(leftNode: TreeNode | null, rightNode: TreeNode | null): boolean {
    if (!leftNode && !rightNode) {
      return true;
    }

    if (!leftNode || !rightNode) {
      return false;
    }

    return leftNode.val == rightNode.val && check(leftNode.left, rightNode.right) && check(leftNode.right, rightNode.left);
  }

  return check(root, root)
}
