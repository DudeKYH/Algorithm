function change(s, zero, num) {
    
    if(s === "1") {
        return [num, zero];
    }
    
    
    let zeroCount = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '0')
            zeroCount += 1;
    }
    
    let oneCount = s.length - zeroCount;
    
    let newArr = [];
      
    
    while(oneCount > 0) {
        if (oneCount % 2 === 0) newArr.push('0'); 
        else newArr.push("1");
        oneCount = parseInt(oneCount / 2);        
    }
    
    const newStr = ''.concat(...newArr.reverse());
    
    return change(newStr, zero  + zeroCount, num + 1);
}

function solution(s) {
    var answer = [];
    
    answer = change(s, 0, 0);
    
    return answer;
}