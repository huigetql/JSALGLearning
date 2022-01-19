/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  console.log(root.left)
  if (root == null) return 0
  let q = [root]
  //root本身就是一层，所以深度初始化为1
  let depth = 1
  while (q.length) {
    let len = q.length
    //将当前队列向四处扩散
    for (let i = 0; i < len; i++) {
      let curr = q.shift()
      console.log(curr, curr.left, curr.right, i)
      //判断是当前否是叶子节点
      if (curr.left == null && curr.right == null) {
        return depth
      }
      //如果不是叶子结点，就将其相邻节点加入队列
      if (curr.left) {
        q.push(curr.left)
      }
      if (curr.right) {
        q.push(curr.right)
      }
    }
    depth++
  }
  return depth
}
console.log(minDepth([2, null, 3, null, 4, null, 5, null, 6]))
