/*
* 思路 不需要知道具体的回文，只需要知道长度，那么其实就是计算出成偶数出现的字母次数
* */
function longestPalindrome(s: string): number {
    let map: Record<string, number> = {};
    let flag: boolean = false;
    let ans: number = 0;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    for (const mapKey in map) {
        if (!flag && map[mapKey] % 2 === 1) {
            flag = true;
        }
        if (map[mapKey] > 1) {
            ans += Math.floor(map[mapKey] / 2) * 2;
        }
    }
    if (flag && Object.keys(map).length > 0 || ans === 0 && s.length > 0) {
        ans += 1;
    }
    return ans;
}
