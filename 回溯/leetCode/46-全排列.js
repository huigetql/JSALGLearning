/**
 * 难度：中等
 *
 * 规则：
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 * 示例1
 * 输入：[1, 2, 3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * 示例2
 * 输入：[0,1]
 * 输出：[[0,1],[1,0]]
 *
 * 提示：
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 */

function getArrange(list /**选择列表 */) {
  let res = []
  let backArrange = function (selectList /**当前选择 */) {
    if (selectList.length === list.length /**结束条件 */) {
      res.push(JSON.parse(JSON.stringify(selectList)))
      return
    }
    for (let index = 0; index < list.length; index++) {
      if (selectList.includes(list[index])) continue // 有重复直接跳过
      selectList.push(list[index] /**路径 */) // 做选择 - 增加当前路径
      backArrange(selectList)
      selectList.pop() // 撤销选择 - 删除当前路径
    }
  }
  backArrange([])
  return res
}
// getArrange([1, 2, 3])
console.log(getArrange([1, 2, 3]))
