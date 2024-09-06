function solution(n) {
    var answer = 0;
    let array = [0, 1];
    
    for(let i = 2; i <= n; i++) {
        array.push((array[i - 2] + array[i-1]) % 1234567);
    }
    
    answer = array[n];
    
    return answer;
}