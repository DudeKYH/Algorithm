function solution(k, tangerine) {
    var answer = 0;
    
    const map = new Map();
    
    for(let i = 0; i < tangerine.length; i++) {
        if(!map.has(tangerine[i]))
            map.set(tangerine[i], 1)
        else
            map.set(tangerine[i], map.get(tangerine[i]) + 1);
    }
    
    const array = [...map];
    array.sort((a, b) => { return b[1] - a[1]});
    
    let total = k;
    
    for(let i = 0; i < array.length; i++) {
        const amount = array[i][1];
        total -= amount;
        answer += 1;
        
        if(total <= 0)
            break;
    }
    
    return answer;
}