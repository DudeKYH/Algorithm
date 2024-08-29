function solution(today, terms, privacies) {
    var answer = [];
    const termObjects = {};
    const privacyObjects = {};
    
    const todayDate = new Date(today.replaceAll('.', '-'));
    
    for(let i = 0; i < terms.length; i++) {
        const term = terms[i].slice(0, 1);
        const termPeriod = terms[i].slice(2);
        
        termObjects[term] = parseInt(termPeriod);
    }
    
    for(let i = 0; i < privacies.length; i++) {
        const privacyDate = new Date(privacies[i].slice(0, 10).replaceAll('.', '-'));
        const privacyTerm = privacies[i].slice(-1);
        
        if(!privacyObjects[privacyTerm]) 
            privacyObjects[privacyTerm] = { date: [], index: [] };
        privacyObjects[privacyTerm].date.push(privacyDate);
        privacyObjects[privacyTerm].index.push(i + 1);
    }
    
    for(const privacy in privacyObjects) {
        for(let i = 0; i < privacyObjects[privacy].date.length; i++) {
            const privacyDate = privacyObjects[privacy].date[i];
            privacyDate.setMonth(privacyDate.getMonth() + termObjects[privacy]);
            
            if(privacyDate - 1 < todayDate) {
                answer.push(privacyObjects[privacy].index[i]);   
            }
        }
    }
    
    answer.sort((a, b) => a - b);
    
    return answer;
}