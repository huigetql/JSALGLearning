/**
 * 难度：中等
 *
 * 规则：
 * 给你一个数组 nums ，数组中只包含非负整数。定义 rev(x) 的值为将整数 x 各个数字位反转得到的
 * 结果。比方说 rev(123) = 321 ， rev(120) = 21 。我们称满足下面条件的下标对 (i, j) 是
 * 好的
 * 0 <= i < j < nums.length
 * nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
 *
 *
 * 示例1
 * 输入：nums = [42,11,1,97]
 * 输出：2
 * 解释：两个坐标对为：
 *  - (0,3)：42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121 。
 *  - (1,2)：11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12 。
 *
 * 示例2
 * 输入：nums = [13,10,35,24,76]
 * 输出：4
 *
 * 提示：
 * 1 <= nums.length <= 10**5
 * 0 <= nums[i] <= 10**9
 */

/**
 * 思路：
 * nums[i] + rev(nums[j]) == nums[j] + rev(nums[i]) 可以转化为
 *      nums[i] - rev(nums[i]) = nums[j] - rev(nums[j])
 * 即可以记录自身与自身反转数值的差相同的个数，出现最多的即为答案
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  const reverseNumber = (num) => {
    return +String(num).split('').reverse().join('')
  }
  const map = {}
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    const minus = nums[i] - reverseNumber(nums[i])
    map[minus] = map[minus] ? map[minus] + 1 : 1
    /**
     * 1 2 3 4
     * 0 1 3 6
     *   1 2 3
     * ·······
     * 每次多map[minus] - 1种可能
     */
    max += map[minus] - 1
  }
  return max % (10 ** 9 + 7)
}

console.log(countNicePairs([42, 11, 1, 97]))
console.log(countNicePairs([13, 10, 35, 24, 76, 65, 54]))
