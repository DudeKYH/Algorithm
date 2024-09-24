function sumArr(num, arr, set) {   
    for(let start = 0; start < arr.length; start++) {
        let sum = 0;
        for(let index = 0; index < num; index++) {
            sum += arr[(start + index) % arr.length];
        }
        set.add(sum);
        
        if(num === arr.length)
            break;
    }
}

function solution(elements) {
    var answer = 0;
    
    const sumSet = new Set();
    
    for(let i = 1; i <= elements.length; i++) {
        sumArr(i, elements, sumSet);
    }
    
    answer = sumSet.size;
    
    return answer;
}