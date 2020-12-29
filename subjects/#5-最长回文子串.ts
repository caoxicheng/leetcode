// 5. 最长回文子串
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"
function longestPalindrome(s: string): string {
  if (s.length === 1) {
    return s;
  }
  let result: string = '';
  for (let i = 0 ; i < s.length; i++) {
    for( let j = i + 1; j <= s.length; j++) {
      if (palindrome(s.slice(i,j)) && result.length < s.slice(i,j).length) {
        result = s.slice(i,j);
      }
    }
  }
  return result
};

let palindrome = (function(): (string) => boolean {
    let map = Object.create(null);

    return function(S: string) {
      if (map[S]) {
        return map[S];
      }
      if (S.length > 2) {
        let result: boolean;
        result = S[0] === S[S.length - 1] ? palindrome(S.slice(1, S.length-1)) : false;
        map[S] = result;
        return result;
      } else {
        if (S.length === 2) {
          map[S] =  S[0] === S[1];
          return S[0] === S[1];
        } else {
          map[S] = true;
          return true;
        }
      }
    }
  })();

console.log(longestPalindrome('cddb'))
