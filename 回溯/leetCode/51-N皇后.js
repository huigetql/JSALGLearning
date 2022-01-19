/**
 * 难度：困难
 *
 * 规则：
 * 给你一个 N×N 的棋盘，让你放置 N 个皇后（说明每一行都必须有一个），使得它们不能互相攻击。皇* 后可以攻击同一行、同一列、* 左上左下右上右下四个方向的任意单位。每一种解法包含一个不同的 n * 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位
 *
 * 示例1
 * 输入：n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 *
 * 示例2
 * 输入：n = 1
 * 输出：[["Q"]]
 */
// 检验是否可以放置皇后
function validPlaceQueen(row, col, chessboard, num) {
  // 如果是第一行 直接return true
  if (row === 0) return true
  // 判断当前列是否已放置
  for (let i = 0; i < num; i++) {
    if (chessboard[i][col] === 'Q') return false
  }
  // 判断左上角是否已放置
  for (let i = row - 1, j = col - 1; i >= 0; i--, j--) {
    if (chessboard[i][j] === 'Q') return false
  }
  // 判断右上角是否已放置
  for (let i = row - 1, j = col + 1; i >= 0; i--, j++) {
    if (chessboard[i][j] === 'Q') return false
  }
  return true
}
function getQueen(num) {
  let res = []

  function backQueen(row /**行数  */, chessboard /**当前棋盘 */) {
    if (row === num /**结束条件 */) {
      res.push(JSON.parse(JSON.stringify(chessboard)))
      return
    }

    for (let col = 0; col < chessboard.length; col++) {
      if (validPlaceQueen(row, col, chessboard, num)) {
        chessboard[row][col] = 'Q' /**做选择 - 放置皇后 */
        backQueen(row + 1, chessboard)
        chessboard[row][col] = '.' /**撤销选择 */
      }
    }
  }
  // 生成棋盘
  const chessboard = [...Array(num)].map(
    (item) => (item = [...Array(num)].fill('.'))
  )
  backQueen(0, chessboard)
  console.log(res)
  // res是所有棋盘  下面操作是转换成符合题目的形式
  return res.map(
    (i) =>
      (i = i.map((j) => {
        let str = ''
        j.forEach((item) => {
          str += item
        })
        return str
      }))
  )
}
getQueen(5)
// console.log(getQueen(5))
