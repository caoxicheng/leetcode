function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  let len: number = Math.min(s.length, numRows);
  let rows: string[] = [];
  for (let i = 0; i<len; i++) rows.push("");

  let down: boolean = false;
  let loc: number = 0;

  for (const c of s) {
    rows[loc] += c;
    if (loc === 0 || loc === numRows - 1){
      down = !down;
    }

    loc += down ? 1:-1;
  }

  let ans: string = "";
  for (const row of rows) {
    ans += row;
  }
  return ans;
};