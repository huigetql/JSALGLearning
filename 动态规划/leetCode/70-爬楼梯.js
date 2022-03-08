/**
 * 难度：简单
 *
 * 规则：
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶
 *
 * 示例1
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1 1
 * 2
 *
 * 示例2
 * 输入：n = 3
 * 输出：3
 * 解释：有三种方法可以爬到楼顶。
 * 1 1 1
 * 1 2
 * 2 1
 *
 * 提示：
 * 1 <= n <= 45
 */

/**
 * @param {number} n
 * @return {number}
 */

/**
 * 思路：
 * 由于只能爬1或2个台阶，即最后一次爬上楼顶的情况也只有这两种情况
 * 即f(n) = f(n-1) + f(n-2),同理计算f(n-1)和f(n-2)即可
 * 如 n = 4 有以下5种情况
 * f(3) = 3
 * 1 1 1   1
 * 1 2     1
 * 2 1     1
 * f(2) = 2
 * 1 1     2
 * 2       2
 * 即
 * 最后一步若走1个台阶，则只需要计算出台阶数为 n-1 的情况所有方法
 * 最后一步若走2个台阶，则只需要计算出台阶数为 n-2 的情况所有方法
 * 最后再相加即可
 */

// 方法一
// function climbStairs(n) {
//   let stairsMap = {
//     1: 1,
//     2: 2,
//   }
//   for (let i = 3; i <= n; i++) {
//     stairsMap[i] = stairsMap[i - 1] + stairsMap[i - 2]
//   }
//   console.log(stairsMap[n])
//   return stairsMap[n]
// }
// climbStairs(6)

// 方法二
// function climbStairs(n) {
//   console.log(n)
//   if (n === 1) return 1
//   if (n === 2) return 2
//   return climbStairs(n - 1) + climbStairs(n - 2)
// }

// 方法三（方法二基础上多个log）
let backLog = {}
function climbStairs(n) {
  if (backLog[n]) return backLog[n]
  if (n === 1) return 1
  if (n === 2) return 2
  backLog[n] = climbStairs(n - 1) + climbStairs(n - 2)
  return backLog[n]
}
console.log(climbStairs(45))
