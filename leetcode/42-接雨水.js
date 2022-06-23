/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨
 * 水。
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单
 * 位的雨水（蓝色部分表示雨水）。
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 * 提示：
 * n == height.length
 * 1 <= n <= 2 * (10 ** 4)
 * 0 <= height[i] <= 10 ** 5
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 记录每一个所能存储的雨水  第一格/最后一格再低也不能存雨水初始化为0
  let temp = {
    0: 0,
    [height.length - 1]: 0,
  }
  for (let left = 1; left <= height.length - 2; left++) {
    let nowHeight = height[left] // 当前高度
    let leftHeight = height.slice(0, left) // 当前柱子左侧的所有柱子
    let rightHeight = height.slice(left + 1) // 当前柱子右侧所有柱子
    let leftIndex = -1
    let rightIndex = -1

    let leftLastMaxHeight = leftHeight.reduce((i, j, index) => {
      if (j > i) leftIndex = index // 记录最近一次最大值
      return Math.max(i, j)
    }, nowHeight)
    let rightLastMaxHeight = rightHeight.reduce((i, j, index) => {
      if (!~rightIndex && j > i) rightIndex = index // 记录最近一次最大值
      return Math.max(i, j)
    }, nowHeight)

    if (!~leftIndex || !~rightIndex) {
      // 若没有比当前高的就必然当前柱子无法接水
      temp[left] = 0
      continue
    }
    // 取最小值
    temp[left] = Math.min(leftLastMaxHeight, rightLastMaxHeight) - nowHeight
  }
  return Object.values(temp).reduce((i, j) => i + j, 0)
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))
