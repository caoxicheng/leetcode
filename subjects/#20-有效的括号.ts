let map: any = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
}

function isValid(s: string): boolean {

    let stack: string[] = [];
    let top: string | undefined;

    for(let char of s){
        let value;
        if((value = map[char])){
            stack.push(value);
        }else{
            top = stack.pop();
            if(top !== char){
                return false;
            }
        }
    }

    return !stack.length;
}

console.log(isValid('[()]'));
