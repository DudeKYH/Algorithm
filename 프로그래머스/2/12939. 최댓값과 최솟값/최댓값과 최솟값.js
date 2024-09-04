function solution(s) {
    var answer = '';
    const strArr = s.split(" ");
    let min = Math.min(...strArr);
    let max = Math.max(...strArr);
    answer = min + " " + max;
    return answer;
}