/**
 * 难度：中等
 *
 * 规则：
 * 给定一个长度为 n 的整数数组 height 。有n条垂线，第 i 条线的两个端点是 (i, 0) 和 (i,  * height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * 说明：你不能倾斜容器。
 *
 * 示例1
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色* 部分）的最大值为 49。
 *
 * 示例2
 * 输入：height = [1,1]
 * 输出：1
 *
 * 提示：
 * n == height.length
 * 2 <= n <= 105
 * 0 <= height[i] <= 104
 */

/**
 * @param {number[]} height
 * @return {number}
 */

/**
 * 实际求面积
 */

/**
 * 双指针
 */
function maxArea(height) {
  if (height.length === 2 /** n=2直接返回容量即可 */)
    return height[0] > height[1] ? height[1] : height[0]
  let left = 0
  let right = height.length - 1
  let xLen = height.length // x轴长度 每次操作-1
  let result = 0
  while (left < right) {
    xLen--
    let count = 0
    if (height[left] >= height[right]) {
      count = height[right] * xLen
      right--
    } else {
      count = height[left] * xLen
      left++
    }
    result = result > count ? result : count
  }

  return result
}
// console.log(maxArea([1, 1]))
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 25, 7]))

/**
 * 双循环 height过大会卡死
 */
function maxAreaByCircle(height) {
  if (height.length === 2 /** n=2直接返回容量即可 */)
    return height[0] > height[1] ? height[1] : height[0]
  let result = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const min = height[i] > height[j] ? height[j] : height[i]
      const count = min * (j - i)
      result = result > count ? result : count
    }
  }
  return result
}

console.log(maxAreaByCircle([1, 1]))
console.log(maxAreaByCircle([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxAreaByCircle([1, 8, 6, 2, 5, 4, 8, 25, 7]))
