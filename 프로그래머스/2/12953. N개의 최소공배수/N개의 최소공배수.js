function checkCommonMultiple(num, arr) {
    for(let i = 0; i < arr.length - 1; i++)
    {
        if(num % arr[i] !== 0)
            return false;
    }
    return true;
}

function solution(arr) {
    var answer = 0;
    
    arr.sort((a, b)=> b - a);
    
    let count = 1;
    let maxNum = 0;
    while(1) {
        maxNum = arr[arr.length - 1] * count;
        if(checkCommonMultiple(maxNum, arr)) {
            answer = maxNum;
            break;
        }
        
        count += 1;
    }
    return answer;
}