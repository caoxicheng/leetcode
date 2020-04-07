// 4. 寻找两个有序数组的中位数
// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

// 你可以假设 nums1 和 nums2 不会同时为空。

// 示例 1:

// nums1 = [1, 3]
// nums2 = [2]

// 则中位数是 2.0
// 示例 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// 则中位数是 (2 + 3)/2 = 2.5



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function (nums1, nums2) {
//     if (nums1.length === 0 && nums2.length === 1) {
//         return nums2[0].toFixed(1)
//     }
//     if (nums2.length === 0 && nums1.length === 1) {
//         return nums1[0].toFixed(1)
//     }
//     // 数组总长度
//     let length = +(nums1 ? nums1.length : 0) + +(nums2 ? nums2.length : 0)
//     // 中间长度向下取整
//     let midLength = Math.floor(length / 2)
//     // 是否为奇数false
//     let isOdd = length % 2 === 0 ? false : true
//     // 已记录数字个数
//     let currIndex = 0
//     let currNumber

//     let n1 = 0, n2 = 0
//     let flag = false
//     let flagNumber

//     while (nums1[n1] !== void 0 || nums2[n2] !== void 0) {
//         if (nums1[n1] === void 0) {
//             currNumber = nums2[n2]
//             n2++
//         } else if (nums2[n2] === void 0) {
//             currNumber = nums1[n1]
//             n1++
//         } else if (nums1[n1] <= nums2[n2]) {
//             currNumber = nums1[n1]
//             n1++
//         } else {
//             currNumber = nums2[n2]
//             n2++
//         }
//         currIndex++
//         if (flag) {
//             if (isOdd) {
//                 return currNumber.toFixed(1)
//             } else {
//                 return ((flagNumber + currNumber) / 2).toFixed(1)
//             }
//         }
//         if (currIndex === midLength) {
//             flagNumber = currNumber
//             flag = true
//         }
//     }
// };

var findMedianSortedArrays = function (nums1, nums2) {
    
}

findMedianSortedArrays([1, 2], [3, 4])