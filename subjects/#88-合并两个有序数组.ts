/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let len = m+n-1;
  let index1 = m - 1;
  let index2 = n - 1;
  while(index1 >= 0 || index2 >= 0) {
    if (index1 < 0) {
      nums1[len--] = nums2[index2--];
      continue;
    }
    if (index2 < 0) {
      nums1[len--] = nums1[index1--];
      continue;
    }
    if (nums1[index1] > nums2[index2]) {
      nums1[len--] = nums1[index1--];
    } else {
      nums1[len--] = nums2[index2--];
    }
  }
};