
function solution(numbers) {
    var answer = [];
    const stack = [];
    const reverseNumbers = numbers.reverse();
    
    for(let i = 0; i < reverseNumbers.length; i++) {
        while(1) {
            if(stack.length === 0) {
                answer.push(-1);
                stack.push(reverseNumbers[i]);
                break;
            }
            const num = stack.pop();
            if(num > reverseNumbers[i]) {
                answer.push(num);
                stack.push(num);
                stack.push(reverseNumbers[i]);
                break;
            }
        }
        
    }
    
    return answer.reverse();
}