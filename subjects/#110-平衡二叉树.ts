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

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) {
    return true
  } else {
    return Math.abs(height(root.left) - height(root.right)) <=1 && isBalanced(root.left) && isBalanced(root.right);
  }

 
}


function height(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  } else {
    return Math.max(height(root.left), height(root.right)) + 1;
  }
}
