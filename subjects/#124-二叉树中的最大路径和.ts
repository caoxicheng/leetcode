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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    // 既然有这种情况，那就判断一下，符合题意的就是默认传入一个null了，递归时不会有该参数传入
    return false;
  }  else if (root.left === null && root.right) {
    return hasPathSum(root.right, targetSum - root.val);
  } else if (root.left && root.right === null) {
    return hasPathSum(root.left, targetSum - root.val);
  } else if (root.left === null && root.right === null && targetSum - root.val === 0) {
    return true;
  } else if (root.left && root.right) {
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
  } else {
    return false;
  }
}

// 一开始指判断了传入数字为正数，但是也有可能是负数，但是，实际上不管正负数。因为节点上的数字可能既有正数又有负数。所以必须遍历所有节点，那么只需要判断极端情况就可以。
// 当然还使用了｜｜符号的短路特点
