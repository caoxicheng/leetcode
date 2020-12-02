function myAtoi(s: string): number {
  s = s.trim();
  let symbol = true;
  let index = 0;
  let result: any = "";
  if (s[index] == "-") {
    symbol = false;
    index++;
  } else if (s[index] == "+") {
    index++;
  }
  for (; index < s.length; index++) {
    if ("0" <= s[index] && s[index] <= "9") {
      result += s[index];
    } else {
      break;
    }
  }
  if (result === "") {
    return 0;
  }

  symbol === false && (result = -1 * Number(result));
  if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  if (result < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  }
  return result;
}
