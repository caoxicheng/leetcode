function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    let map: Record<string, any> = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s.charAt(i)]) {
            if (map[s.charAt(i)] !== t.charAt(i)) {
                return false;
            }
        } else {
            map[s.charAt(i)] = t.charAt(i);
        }
        for (let mapKey in map) {
            if (mapKey !== s.charAt(i) && map[mapKey] === t.charAt(i)) {
                return false;
            }
        }
    }
    return true;
}
