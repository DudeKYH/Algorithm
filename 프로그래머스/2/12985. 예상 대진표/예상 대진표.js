function solution(n,a,b)
{
    var answer = 0;

    for(let i = 0; i < Math.sqrt(n); i++) {
        console.log(a, b);
        if(Math.round(a / 2) === Math.round(b / 2)) {
            answer = i + 1;
            break;
        }
        
        a = Math.round(a / 2);
        b = Math.round(b / 2);
    }

    return answer;
}