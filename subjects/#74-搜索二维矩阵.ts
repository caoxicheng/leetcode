function searchMatrix(matrix: number[][], target: number): boolean {
  let m: number = matrix[0].length, n: number = matrix.length;
  let low = 0, high = m * n -1;
  while (low <= high) {
    const mid = ((high - low) / 2 | 0) + low;
    const x = matrix[(mid / m) | 0][mid % m];
    if (x < target) {
      low = mid + 1;
    } else if (x > target) {
      high = mid - 1;
    } else {
      return true;
    }
  }
  return false
};