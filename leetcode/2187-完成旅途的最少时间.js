/**
 * 难度：中等
 *
 * 规则：
 * 给你一个数组 time ，其中 time[i] 表示第 i 辆公交车完成 一趟旅途 所需要花费的时间。
 * 每辆公交车可以 连续 完成多趟旅途，也就是说，一辆公交车当前旅途完成后，可以 立马开始 下一趟
 * 旅途。每辆公交车 独立 运行，也就是说可以同时有多辆公交车在运行且互不影响。
 * 给你一个整数 totalTrips ，表示所有公交车 总共 需要完成的旅途数目。请你返回完成 至少
 * totalTrips 趟旅途需要花费的 最少 时间。

 *
 * 示例1
 * 输入：time = [1,2,3], totalTrips = 5
 * 输出：3
 * 解释：
 * - 时刻 t = 1 ，每辆公交车完成的旅途数分别为 [1,0,0] 。
  已完成的总旅途数为 1 + 0 + 0 = 1 。
  - 时刻 t = 2 ，每辆公交车完成的旅途数分别为 [2,1,0] 。
  已完成的总旅途数为 2 + 1 + 0 = 3 。
  - 时刻 t = 3 ，每辆公交车完成的旅途数分别为 [3,1,1] 。
  已完成的总旅途数为 3 + 1 + 1 = 5 。
  所以总共完成至少 5 趟旅途的最少时间为 3 。

 *
 * 示例2
 * 输入：time = [2], totalTrips = 1
 * 输出：2
 * 解释：
 * 只有一辆公交车，它将在时刻 t = 2 完成第一趟旅途。
   所以完成 1 趟旅途的最少时间为 2 。

 *
 * 提示：
 * 1 <= time.length <= 10^5
 * 1 <= time[i], totalTrips <= 10^7
 */

/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */

// 方法一，暴力破解(超时)
/**
 * 思路
 * 每过一个小时就算出所使用时间所有车辆共完成totalTrips趟车即可
 */
// function minimumTime(time, totalTrips) {
//   let times = 0 // 次数
//   let date = 0 // 时间

//   while (times < totalTrips) {
//     date++
//     let nums = 0
//     time.forEach((item) => {
//       nums += Math.floor(date / item)
//       times = nums
//     })
//   }

//   return date
// }

// 方法二 二分法
/**
 * 思路
 * 最短时间为0 最长时间为速度最快的车走完旅途所需时间
 * 可以取这时间中间值，如果 time.length 的公交车同时发动
 * 在这中间值共走的旅途低于 totalTrips ，说明最短时间区间再中间值左侧
 * 再取最短时间与这中间值的一半 再次计算
 * 在这中间值共走的旅途高于 totalTrips ，说明最短时间区间再中间值右侧
 * 再取这中间值与最长时间的一半 再次计算
 */
/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
function minimumTime(time, totalTrips) {
  time = time.sort((a, b) => a - b) // 先从小到大排序

  let left = 0 // 不动即为0
  let right = time[0] * totalTrips // '最短时间'
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2) // 中间值,只取整数部分，小数部分没意义
    // console.log('left', left, 'right', right, 'mid', mid)
    let nums = 0
    for (let i = 0; i < time.length; i++) {
      if (mid < time[i]) continue // 达不到一次直接跳过
      nums += Math.floor(mid / time[i]) // 只需要整数部分
    }
    if (nums >= totalTrips) right = mid
    else left = mid + 1
  }
  return left
}

console.log(minimumTime([5, 10, 10], 9)) // 25
console.log(minimumTime([1, 2, 3], 5)) // 3
