function solution(brown, yellow) {
    var answer = [];
    
    let yellowDivisor = [];
    
    for(let i = 1; i <= parseInt(Math.sqrt(yellow)); i++) {
        if(yellow % i === 0) {
            yellowDivisor.push(i);
        }
    }
    
    for(let i = 0; i < yellowDivisor.length; i++) {
        const yellowLength = yellowDivisor[i];
        const yellowWidth = yellow / yellowDivisor[i];
        
        const brownLength = yellowLength + 1;
        const brownWidth = yellowWidth + 1;
        
        if(brownWidth * 2 + brownLength * 2 === brown) {
            answer.push(brownWidth + 1);
            answer.push(brownLength + 1);
        }
    }
    
    return answer;
}