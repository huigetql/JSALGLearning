/**
 * 难度：中等
 *
 * 规则：
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。
 *
 * 示例1
 * 输入：s = "abcabcbb"
 * 输出：3
 * 解释：因为无重复字符的最长子字符串是 "abc"，所以其长度为 3。
 *
 * 示例2
 * 输入：s = "bbbbb"
 * 输出：1
 * 解释: 因为无重复字符的最长子字符串是 "b"，所以其长度为 1。
 *
 * 示例3
 * 输入：s = "pwwkew"
 * 输出：3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 *      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 * 提示：
 * 0 <= s.length <= 5 * (10 ** 4)
 * s 由英文字母、数字、符号和空格组成
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
// 暴力破解
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0
  let max = 0
  for (let left = 0; left < s.length; left++) {
    let recordList = [s[left]] // 用于存储记录
    for (let right = left + 1; right < s.length; right++) {
      if (recordList.includes(s[right])) break
      recordList.push(s[right])
    }
    max = Math.max(max, recordList.length)
  }

  return max
}
/**
 * 滑动窗口
 * 删除上一次left记录 保留上一次recordList
 */

var lengthOfLongestSubstring2 = function (s) {
  if (!s) return 0
  let max = 0
  let right = 1
  let recordList = [s[0]]
  for (let left = 0; left < s.length; left++) {
    if (left) recordList.splice(0, 1)

    while (right < s.length && !recordList.includes(s[right])) {
      recordList.push(s[right])
      right++
    }
    max = Math.max(max, recordList.length)
  }
  return max
}
console.log(lengthOfLongestSubstring2('abcabcbb'))
console.log(lengthOfLongestSubstring2('bbbbb'))
console.log(lengthOfLongestSubstring2('pwwkew'))
