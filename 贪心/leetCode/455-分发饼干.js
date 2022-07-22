/**
 * 难度：简单
 *
 * 规则：
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 * 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干j，
 * 都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子
 * 会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 *
 * 示例1
 * 输入：g = [1,2,3], s = [1,1]
 * 输出：1
 *
 * 示例2
 * 输入：g = [1,2], s = [1,2,3]
 * 输出：2
 *
 * 提示：
 * nums1.length == m
 * nums2.length == n
 * 1 <= g.length <= 3 * 104
 * 0 <= s.length <= 3 * 104
 * 1 <= g[i], s[j] <= 231 - 1
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const gLen = g.length,
    sLen = s.length
  // 从大到小排序
  g = g.sort((a, b) => b - a)
  s = s.sort((a, b) => b - a)
  let [gIndex /** 孩子指针 */, sIndex /** 饼干指针 */, count] = [0, 0, 0]
  while (gIndex <= gLen - 1 && sIndex <= sLen - 1) {
    if (s[sIndex] >= g[gIndex]) {
      // 只要当前饼干尺寸>=孩子胃口值就说明可以喂，饼干、孩子指针一起右移，并计数
      sIndex++
      count++
    }
    gIndex++
  }
  return count
}

console.log(findContentChildren([1, 2, 3], [1, 1]))
console.log(findContentChildren([1, 2], [1, 2, 3]))
