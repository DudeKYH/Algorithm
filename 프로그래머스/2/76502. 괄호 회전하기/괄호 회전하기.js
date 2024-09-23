function solution(s) {
    var answer = 0;
    
    if(s.length % 2 === 1) 
        return answer;
    
    // 앞에서부터 올바른 괄호인지 체크
    for(let start = 0; start < s.length; start++) {
        const stack = [];
        let flag = true;
    
        for(let i = 0; i < s.length; i++) {
            const index = (i + start) % s.length;
            if(s[index] === "(" || s[index] === "{" || s[index] === "[") {
                stack.push(s[index]);
            }
            else {
                const str = stack.pop();
                if(str === "(" && s[index] === ")") {
                    continue;
                }   
                if(str === "{" && s[index] === "}") {
                    continue;
                }  
                if(str === "[" && s[index] === "]") {
                    continue;
                } 
                // 여기까지 오면 올바른 괄호가 아니므로 
                flag = false;
                break;
            } 
        }
    
        if(flag === true) 
            answer += 1;
    }
    
    
    return answer;
}