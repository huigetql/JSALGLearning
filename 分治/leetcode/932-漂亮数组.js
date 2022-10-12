/**
 * 难度：中等
 *
 * 规则：
 * 对于某些固定的 N，如果数组 A 是整数 1, 2, ..., N 组成的排列，使得：
 * 对于每个 i < j，都不存在 k 满足 i < k < j 使得 A[k] * 2 = A[i] + A[j]。
 * 那么数组 A 是漂亮数组。
 *
 * 给定 N，返回任意漂亮数组 A（保证存在一个）。
 *
 * 示例1
 * 输入：4
 * 输出：[2,1,4,3]
 *
 * 示例2
 * 输入：5
 * 输出：[3,1,2,5,4]
 *
 * 提示：
 * 1 <= N <= 1000
 */

/**
 * 思路：
 * 可以把问题分解成：若排列的数组随便取出{i,j}组成新的数组都为漂亮数组，则整体就是漂亮数组
 * 满足：
 * A[k] * 2 = A[i] + A[j]  左边恒为偶数，则可以确保右边一奇一偶则为满足
 * 则把1 - N的奇偶数分成左右两列再进行递归排序
 */

/**
 * @param {number} n
 * @return {number[]}
 */
const beautifulArray = function (n) {
  const map = {
    1: [1],
  }
  function callback(number) {
    if (map[number]) return map[number]
    const left = callback(Math.ceil(number / 2)).map((item) => 2 * item - 1)
    const right = callback(Math.floor(number / 2)).map((item) => 2 * item)
    const res = [...left, ...right]
    map[number] = res
    return res
  }
  return callback(n)
}

console.log(beautifulArray(4))
console.log(beautifulArray(5))
