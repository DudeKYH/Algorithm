function getSliceNumber(pos, num) {
    const x = pos % num;
    const y = Math.floor(pos / num);
    
    return Math.max(x, y) + 1;
}

function solution(n, left, right) {
    var answer = [];
    
    for(let i = left; i <= right; i++) {
        answer.push(getSliceNumber(i, n));
    }
    
    return answer;
}