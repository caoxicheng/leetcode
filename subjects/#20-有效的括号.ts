function isValid(s: string): boolean {
    let stack: Array<string> = [];
    for (let index = 0; index < s.length; index++) {
        switch (s[index]) {
            case '(':
            case '[':
            case '{':
                stack.push(s[index]);
                break;
            case ')':
                if (stack[stack.length - 1] === '(') {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case ']':
                if (stack[stack.length - 1] === '[') {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case '}':
                if (stack[stack.length - 1] === '{') {
                    stack.pop();
                } else {
                    return false;
                }
        }
    }
    return stack.length === 0;
};