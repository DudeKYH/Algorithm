function solution(numbers) {
    var answer = '';
    
    const strNumbers = numbers.map((num) => num.toString());
    
    strNumbers.sort((a, b) => (b+a) - (a+b));
    
    answer = strNumbers[0] === "0" ? "0" : strNumbers.join('');
    
    return answer;
}