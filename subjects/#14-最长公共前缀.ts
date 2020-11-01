function longestCommonPrefix(strs: string[]): string {
    let result = strs[0] || "";

   for (let index = 1; index < strs.length; index++){
       result = commText(result, strs[index]);
       if (result === '') {
           return result;
       }
   }
   return result;
}

function commText(x: string, y: string): string {
    let result: string = "";
    if (x === '' || y === '') {
        return result;
    }
    while(result.length < Math.min(x.length, y.length)){
        if (x[result.length] === y[result.length]) {
            result += x[result.length];
        } else {
            return result;
        }
    }

    return result;
}
