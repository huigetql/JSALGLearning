/**
 * 难度：中等
 *
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 * true ；否则，返回 false 。单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”
 * 单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 *
 * 示例1
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
 * word = "ABCCED"
 * 输出：true
 *
 * 示例2
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
 * word = "SEE"
 * 输出：true
 *
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
 * word = "ABCB"
 * 输出：false
 *
 * 提示：
 * m == board.length
 * n = board[i].length
 * 1 <= m, n <= 6
 * 1 <= word.length <= 15
 * board 和 word 仅由大小写英文字母组成
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const directionList = [
    [0, 1], // 右
    [0, -1], // 左
    [1, 0], // 下
    [-1, 0], // 上
  ]
  let totalRow = board.length
  let totalCol = board[0].length
  let resList = [] // 用于保存已选中的单词索引 二维数组[[行,列],...]

  function valid(row /**行 */, col /**列 */) {
    if (board[row][col] !== word[resList.length]) return
    if (resList.length === word.length) return // 结束条件(成功)
    resList.push([row + 1, col + 1]) // 当前字符符合情况，做记录 +1 是为了方便log 下面也一样
    const resStrList = resList.map((item) => item.join(','))
    for (let [i, j] of directionList) {
      let newRow = row + i
      let newCol = col + j
      // 只对符合要求的继续操作(网格内部)
      if (
        newRow >= 0 &&
        newRow < totalRow &&
        newCol >= 0 &&
        newCol < totalCol
      ) {
        const newStr = [newRow + 1, newCol + 1].join(',')
        const copyResList = JSON.parse(JSON.stringify(resList))
        // 是否存在相同的
        if (resStrList.includes(newStr)) continue
        valid(newRow, newCol)
        if (resList.length === word.length) break
        // 未结束说明不符合 清理不符合的记录
        resList = copyResList
      }
    }
  }
  // 进一步处理不符合的（word中的字符在board中展示不全）
  let boardSet = [...new Set(board.flat(2))]
  let wordSet = [...new Set(word.split(''))]
  let isNext = wordSet.every((item) => boardSet.includes(item))
  if (!isNext) return false

  for (let row = 0; row < totalRow; row++) {
    // 循环row
    for (let col = 0; col < totalCol; col++) {
      if (board[row][col] !== word[0]) continue
      // 循环col
      valid(row, col)
      if (resList.length === word.length) {
        console.log(resList)
        return true
      }
      resList = []
    }
  }
  return false
}

// console.log(
//   exist(
//     [
//       ['A', 'B', 'C', 'E'],
//       ['S', 'F', 'C', 'S'],
//       ['A', 'D', 'E', 'E'],
//     ],
//     'SEE'
//   )
// )
// console.log(
//   exist(
//     [
//       ['a', 'b'],
//       ['c', 'd'],
//     ],
//     'abcd'
//   )
// )
console.log(
  exist(
    [
      ['A', 'A', 'A', 'A', 'A', 'A'],
      ['A', 'A', 'A', 'A', 'A', 'A'],
      ['A', 'A', 'A', 'A', 'A', 'A'],
      ['A', 'A', 'A', 'A', 'A', 'A'],
      ['A', 'A', 'A', 'A', 'A', 'A'],
      ['A', 'A', 'A', 'A', 'A', 'A'],
    ],
    'AAAAAAAAAAAAAAB'
  )
)
