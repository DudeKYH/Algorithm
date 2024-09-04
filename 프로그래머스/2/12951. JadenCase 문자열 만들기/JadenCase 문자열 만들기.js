function solution(s) {
    var answer = '';
    
    let strArr = s.split(' ');

    for(let i = 0; i < strArr.length; i++) {
        const newStr = strArr[i].slice(0, 1).toUpperCase() + strArr[i].slice(1).toLowerCase();
        answer += newStr + ' ';
    }
    answer = answer.slice(0, -1);
    
    return answer;
}