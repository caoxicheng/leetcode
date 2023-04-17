function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    // @ts-ignore
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            if (map.get(s.charAt(i)) !== t.charAt(i)) {
                return false;
            }
        } else {
            map.set(s.charAt(i), t.charAt(i));
        }
        for (let [mapKey, mapValue] of map) {
            if (mapKey !== s.charAt(i) && mapValue === t.charAt(i)) {
                return false;
            }
        }
    }
    return true;
}
