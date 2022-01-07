/**
 * 难度：中等
 *
 * 规则：
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。计算并返回* 可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1。你可以* 认为每种硬币的数量是无限的。
 *
 * 示例1
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 *
 * 示例2
 * 输入：coins = [2], amount = 3
 * 输出：-1
 *
 * 提示：
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 231 - 1
 * 0 <= amount <= 104
 */

// 方法一 暴力递归
let coinChange = function (coins, amount) {
  if (amount === 0) return 0 // 结束条件
  if (amount < 0) return -1 // 结束条件
  let res = -1 // 记录每条支线结束次数
  coins.forEach((coin) => {
    let result = coinChange(coins, amount - coin) // 递归
    if (result === -1) return
    res = result + 1 // 记录
  })
  return res
}

// 方法二 方法一优化 去重
let backLogMap = {} // 记录每条记录
let coinChangeV2 = function (coins, amount) {
  if (backLogMap[amount]) return backLogMap[amount] // 记录中有则直接返回
  if (amount === 0) return 0
  if (amount < 0) return -1
  let res = -1
  coins.forEach((coin) => {
    let result = coinChange(coins, amount - coin)
    if (result === -1) return

    res = result + 1
  })
  backLogMap[amount] = res // 保存记录
  return backLogMap[amount]
}

// 方法三
let coinChangeV3 = function (coins, amount) {
  if (amount <= 0) return -1
  for (let i = 0; i <= amount; i++) {
    backLogMap[i] = amount + 1 // 初始化从0到amount+1的值   amount + 1相当于最大值
  }
  backLogMap[0] = 0 // 初始化第一个值表示
  for (let i = 0; i <= amount; i++) {
    // i为当前金额数
    for (let j = 0; j < coins.length; j++) {
      // j为当前选择面额数
      if (i - coins[j] < 0) continue // 当前金额小于选择面额 说明不能凑出所以无解
      // i-coins[j] < j
      // 当前步数与剩下余额backLogMap[i - coins[j]] + 1 (当前算一步)比较 ，计算最小的
      backLogMap[i] = Math.min(backLogMap[i], 1 + backLogMap[i - coins[j]])
    }
  }
  return backLogMap[amount] !== amount + 1 ? backLogMap[amount] : -1 // 拼不出则返回-1
}

console.log(coinChangeV3([1, 2, 5], 11))
