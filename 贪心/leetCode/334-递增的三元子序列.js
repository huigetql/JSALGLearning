/**
 * 难度：中等
 *
 * 规则：
 * 给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。
 * 如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，
 * 使得 nums[i] < nums[j] < nums[k]，返回 true ；否则，返回 false 。
 *
 *
 * 示例1
 * 输入：nums = [1,2,3,4,5]
 * 输出：true
 * 解释：任何 i < j < k 的三元组都满足题意
 *
 * 示例2
 * 输入：nums = [5,4,3,2,1]
 * 输出：false
 *
 * 提示：
 * 1 <= nums.length <= 5 * 10**5
 * -2**31 <= nums[i] <= 2**31 - 1
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (nums.length < 3) return false
  let [first, second] = [nums[0], Infinity] // 初始化
  for (let j = 1; j < nums.length; j++) {
    let num = nums[j]
    if (num > second) return true
    else if (num > first) {
      second = num
    } else {
      first = num
    }
  }
  return false
}

// console.log(increasingTriplet([1, 2, 1, 2, 1])) // false
console.log(increasingTriplet([1, 1, -2, 6])) // false
