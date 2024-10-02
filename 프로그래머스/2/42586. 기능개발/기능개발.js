function solution(progresses, speeds) {
    var answer = [];
    
    let work = 0;
    while(1) {
        if(work > progresses.length - 1) 
            break;
        
        const remainWork = (100 - progresses[work]);
        const remainDay = Math.ceil(remainWork / speeds[work]);
        let completeWork = 1;
    
        
        for(let i = work + 1; i < progresses.length; i++) {
            const checkWork = (100 - progresses[i]);
            const checkDay = Math.ceil(checkWork / speeds[i]);
            
            if(remainDay >= checkDay) {
                completeWork += 1;
            }
            else {
                break;
            }
        }
        answer.push(completeWork)
        
        work += completeWork;
    }
    
    return answer;
}