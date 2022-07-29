/**
 * 难度：中等
 *
 * 规则：
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数
 字），并返回该子数组所对应的乘积。
 * 测试用例的答案是一个 32-位 整数。
 * 子数组 是数组的连续子序列。

 *
 * 示例1
 * 输入：nums = [2,3,-2,4]
 * 输出：6
 * 解释：子数组 [2,3] 有最大乘积 6。
 *
 * 示例2
 * 输入：nums = [-2,0,-1]
 * 输出：0
 * 解释：结果不能为 2, 因为 [-2,-1] 不是子数组。
 * 1 1 1
 * 1 2
 * 2 1
 *
 * 提示：
 * 1 <= nums.length <= 2 * (10 ** 4)
 * -10 <= nums[i] <= 10
 * nums 的任何前缀或后缀的乘积都 保证 是一个 32-位 整数
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// var maxProduct = function (nums) {
//   let max = -Infinity
//   function back(numsList) {
//     if (numsList.length === 1) return numsList[0] // 为1直接返回第一个
//     const list = [] // 用于记录每次乘积结果
//     numsList.reduce((pre, after) => {
//       const count = after === 0 || pre === 0 ? after : pre * after
//       list.push(count)
//       return count
//     }, 0)
//     return Math.max(...list, ...numsList) // 乘积结果列表和当前传入列表一同比较
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const currentMax = back(nums.slice(i))
//     max = Math.max(currentMax, max)
//   }
//   return max
// }

var maxProduct = function (nums) {
  let curMax = nums[0]
  let curMin = nums[0]
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    // 如果nums[i]为负数  其实curMax与curMin是互换了的
    let temp1 = curMax * nums[i],
      temp2 = curMin * nums[i]
    curMax = Math.max(temp1, temp2, nums[i])
    curMin = Math.min(temp1, temp2, nums[i])
    res = Math.max(curMax, res)
  }
  return res
}

console.log(maxProduct([2, 3, -2, 4])) // 6
console.log(maxProduct([-2, 0, -1])) // 0
console.log(maxProduct([0, 2])) // 2
console.log(maxProduct([3, -1, 4])) // 4
console.log(maxProduct([2, -5, -2, -4, 3])) // 24

/**
 * 2, -5, -2, -4, 3
 * index      0   1   2   3   4
 * nums[index]2   -5  -2  -4  3
 * curMax     2   2   20  20  24
 * curMin     2   -10 -5  -80 -240
 * max        2   2   20  20  24
 *
 *
 */
