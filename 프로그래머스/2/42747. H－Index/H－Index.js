function solution(citations) {
    var answer = 0;
    
    citations.sort((a,b) => b-a);
    
    
    // 6, 5, 3, 1, 0
    
    for(let i = citations.length; i > 0; i--) {
        const count = i;
        const index = i - 1;
        
        if(citations[index] >= count) {
            answer = count;
            break;
        }
    }
    
    return answer;
}