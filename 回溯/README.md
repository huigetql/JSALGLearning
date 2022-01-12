## 回溯算法

- 回溯算法就是一种暴力穷举算法
- 穷举过程为遍历一颗多叉树的过程

## 明确

1.  路径: 当前的选择
2.  选择列表：当前可选择的路径
3.  结束条件：无法再做选择的条件

## 框架

```javascript
let res = []
backFunction(路径,选择列表){
  if(结束条件成立) return res.push(路径)
  for(let 路径 of 选择列表){
    做选择
    backFunction(路径,选择列表)
    撤回选择
  }
}
```
