/**
 * 难度：中等
 *
 * 规则：
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就
 * 是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃
 * 到的最高金额。
 *
 * 示例1
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 *      偷窃到的最高金额 = 1 + 3 = 4 。

 *
 * 示例2
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)
 *      偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 * 提示：
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 400
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//   const result = [0, nums[0]]
//   if (nums.length === 1) return nums[0]
//   for (let i = 2; i <= nums.length; i++) {
//     result[i] = Math.max(result[i - 1], nums[i - 1] + result[i - 2])
//   }
//   return result[nums.length]
// }

var rob = function (nums) {
  if (nums.length === 1) return nums[0]
  /**
   *  before 第一座房子，可当做是nums.slice(0,nums.length-2)座房子的最大可偷金额
   *  after 第二座房子
   *  nums[i] 第三座房子
   *  所以可把每次当做三座房子比较 Math.max(before + nums[i],nums[after])
   */
  let before = nums[0],
    after = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    const save = after // 做存储
    after = Math.max(before + nums[i], after) // 第二座房子往后移
    before = save // 第一座房子往后移
  }
  return after
}
console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))
