/**
 * 难度：困难
 *
 * 规则：
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正
 * 序数组的 中位数 。
 *
 * 示例1
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2
 *
 * 示例2
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.5
 *
 * 提示：
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -106 <= nums1[i], nums2[i] <= 106
 */

var findMedianSortedArrays = function (nums1, nums2) {
  let nums = nums1.concat(nums2)
  nums = nums.sort((a, b) => a - b)
  let isSingle = nums.length % 2 === 1
  if (isSingle) {
    let index = Math.ceil(nums.length / 2)
    return nums[index - 1]
  } else {
    let index = nums.length / 2
    return (nums[index - 1] + nums[index]) / 2
  }
}
console.log(findMedianSortedArrays([1, 3], [2]))
