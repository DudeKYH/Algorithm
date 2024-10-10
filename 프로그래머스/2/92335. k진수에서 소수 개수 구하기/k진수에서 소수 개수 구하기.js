function checkPrimeNumber(num) {
    if(num < 2) return false;
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    
    return true;
}

function solution(n, k) {
    var answer = 0;
    
    const kbaseNumber = n.toString(k);
    const arr = kbaseNumber.split('0');
    
    arr.forEach((numStr) => {
        const num = parseInt(numStr);
        if(num && checkPrimeNumber(num))
            answer += 1;
    });
    
    
    return answer;
}