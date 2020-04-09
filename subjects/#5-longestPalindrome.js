// 5. 最长回文子串
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

// 有问题
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = s[0]
  let _window = [];
  let maxLength = 1;
  let index = 0;
  let temp;
  let tempIndex;
  while (index < s.length) {
    temp = s[index];
    tempIndex = _window.indexOf(temp);
    if (tempIndex === -1) {
      _window.push(temp);
      if (_window.length > maxLength) {
        maxLength = _window.length
      }
    } else {
      // 此处找到最长字串，开始判断是否为回文数
      if (isPalindromic(_window.concat([temp]))) {
        result = _cloneDeep(_window)
      }

      _window.splice(0, tempIndex + 1);
      _window.push(temp);
    }
    index++;
  }

  return result

  // 判断传入字符串是否为回文数
  function isPalindromic(s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
      if (s[i] === s[j]) {
        i++;
        j--;
      } else {
        return false
      }
    }
    return true
  }

  // 简易深拷贝数组
  function _cloneDeep(s){
    let result = []
    for (let index = 0; index < s.length; index++) {
      result.push(s[index]);
    }
    return result
  }
};

console.log(longestPalindrome("babad"))
