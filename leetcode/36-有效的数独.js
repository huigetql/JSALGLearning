/**
 * 难度：中等
 *
 * 规则：
 * 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
 *    1.数字 1-9 在每一行只能出现一次。
 *    2.数字 1-9 在每一列只能出现一次。
 *    3.数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 *
 * 注意：
 *    1.一个有效的数独（部分已被填充）不一定是可解的。
 *    2.只需要根据以上规则，验证已经填入的数字是否有效即可。
 *    3.空白格用 '.' 表示。
 *
 *
 * 示例1
 * 输入：board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

 * 输出：true
 *
 * 示例2
 * 输入：board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

 * 输出：false
 *
 * 提示：
 * board.length == 9
 * board[i].length == 9
 * board[i][j] 是一位数字（1-9）或者 '.' 
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowList = new Array(9).fill(0).map((i) => new Array(9).fill(0))
  const columnList = new Array(9).fill(0).map((i) => new Array(9).fill(0))
  const gridList = new Array(3)
    .fill(0)
    .map((i) => new Array(3).fill(0).map((j) => new Array(9).fill(0)))
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]

      if (num !== '.') {
        const index = Number(num) - 1

        // 第 i 行的 num 值 +！
        rowList[i][index]++
        // 第 i 列的 num 值 +！
        columnList[j][index]++
        // 第 x 区域的 num 值 +1
        gridList[Math.floor(i / 3)][Math.floor(j / 3)][index]++

        // 如果 第 i 行的 num 值的个数大于 1，则说明不满足要求，直接返回 false
        // 如果 第 i 列的 num 值的个数大于 1，则说明不满足要求，直接返回 false
        // 如果 第 x 区域的 num 值 的个数大于 1，则说明不满足要求，直接返回 false
        if (
          rowList[i][index] > 1 ||
          columnList[j][index] > 1 ||
          gridList[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1
        ) {
          return false
        }
      }
    }
  }
  // 全部迭代结束后，说明满足要求，返回 true
  return true
}

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
)

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
)
