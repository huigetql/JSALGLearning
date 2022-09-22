/**
 * 难度：困难
 *
 * 规则：
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 k。一开始你在下标 0 处。每一步，你最多可
 * 以往前跳 k 步，但你不能跳出数组的边界。也就是说，你可以从下标 i 跳到
 * [i + 1， min(n - 1, i + k)] 包含 两个端点的任意位置。
 * 你的目标是到达数组最后一个位置（下标为 n - 1 ），你的 得分 为经过的所有数字之和。
 * 请你返回你能得到的 最大得分
 *
 * 示例1
 * 输入：nums = [1,-1,-2,4,-7,3], k = 2
 * 输出：7
 * 解释：你可以选择子序列 [1,-1,4,3]和为 7
 *
 * 示例2
 * 输入：nums = [10,-5,-2,4,0,3], k = 3
 * 输出：17
 * 解释：你可以选择子序列 [10,4,3] ，和为 17
 *
 * 示例 3
 * 输入：nums = [1,-5,-20,4,-1,3,-6,-3], k = 2
 * 输出：0
 *
 * 提示：
 * 1 <= nums.length, k <= 105
 * -104 <= nums[i] <= 104
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxResult = function (nums, k) {
  if (nums.length === 1) return nums[0]
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    nums[i] = -105
    for (let j = 0; j < i + 2; j++) {
      // const element = array[j]
    }
  }
  return max
}

console.log(maxResult([1, -5, -20, 4, -1, 3, -6, -3], 2))
