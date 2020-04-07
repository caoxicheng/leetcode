// 3. 无重复字符的最长子串
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if(!s) return 0;
    if(s.length == 1) return 1;
    
    let _window = []
    let maxLength = 0
    let index = 0
    let temp
    let tempIndex
    while (index < s.length) {
        temp = s[index]
        tempIndex = _window.indexOf(temp)
        if (tempIndex === -1) {
            _window.push(temp)
            if(_window.length > maxLength) { maxLength = _window.length}
        } else {
            _window.splice(0, tempIndex + 1)
            _window.push(temp)
        }
        index++
    }
    return maxLength
};