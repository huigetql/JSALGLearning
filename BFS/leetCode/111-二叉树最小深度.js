/**
 * 将数组转换为二叉树
 * @param {Array} rootList
 * @returns 二维数组，每一项为叶子节点
 */
var transferTree = function (rootList) {
  let treeList = [[rootList[0]]]
  let isEnd = false
  let index = 1
  let transferNum = 1 // 已经转换的个数
  while (transferNum < rootList.length && !isEnd) {
    let nullNum = treeList[index - 1].filter((item) => !item && item !== 0)
      .length
    let currentLen = treeList[index - 1].length * 2 // 当前循环应该转换的长度
    let list = rootList.slice(
      transferNum,
      currentLen + transferNum - nullNum * 2
    )
    isEnd = !list.filter((item) => item || item === 0).length
    !isEnd && (treeList[index] = list)
    transferNum += currentLen - nullNum * 2
    index++
  }
  return treeList
}
/**
 *
 * 是否有子叶
 */
function isValid(length, treeList) {
  let isNull = false // 是否为子叶
  for (let i = 0; i < length; i++) {
    let before = treeList[i * 2] === 0 ? '0' : treeList[i * 2]
    let after = treeList[i * 2 + 1] === 0 ? '0' : treeList[i * 2 + 1]
    if (!before && !after && !isNull) {
      isNull = true
    }
  }
  return isNull
}

/**
 * 最小深度
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root || !root.length) return 0
  if (root.length === 1) return 1
  let deepLen = -1
  const treeList = transferTree(root)
  console.log(treeList)
  if (treeList.length === 1) return 1
  if (treeList.length === 2) return 2
  // 从第三列开始查找 是否符合
  for (let i = 2; i < treeList.length; i++) {
    let beforeValidList = treeList[i - 1].filter((item) => item || item === 0)
    let len = beforeValidList.length
    if (treeList[i].length <= len * 2 - 2 && !~deepLen) {
      deepLen = i
      continue
    }
    if (isValid(len, treeList[i]) && !~deepLen) {
      deepLen = i
      continue
    }
  }
  if (!~deepLen) return treeList.length
  return deepLen
}
// console.log(minDepth([2, null, 1]))
console.log(minDepth([1, 2, 0, null, null, 0]))
