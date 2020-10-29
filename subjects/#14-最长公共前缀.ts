function longestCommonPrefix(strs: string[]): string {
   let re = '';
   if (!strs.length) return re;
    //    位
   for (let i = 0; i < strs[0].length; i++) {
    //    个
       for (let j = 0; j < strs.length; j++) {
           if (strs[j][i] !== strs[0][i]) {
               return re;
           } 
       }
       re += strs[0][i];
   }
   return re;
}
