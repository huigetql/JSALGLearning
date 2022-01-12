/**
 * 难度：困难
 *
 * 规则：
 * 给你一个 N×N 的棋盘，让你放置 N 个皇后，使得它们不能互相攻击。皇后可以攻击同一行、同一列、* 左上左下右上右下四个方向的任意单位。每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该* 方案中 'Q' 和 '.' 分别代表了皇后和空位
 *
 * 示例1
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 *
 * 示例2
 * 输入：n = 1
 * 输出：[["Q"]]
 */

function getQueen(num) {
  let res = []

  function backQueen(params) {
    console.log(111)
  }

  backQueen([])
  return res
}
console.log(getQueen())
