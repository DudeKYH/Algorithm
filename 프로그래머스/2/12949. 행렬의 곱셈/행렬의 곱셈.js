function solution(arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i < arr1.length; i++) {
        const rowArr1 = arr1[i];
        const resultArr = [];
        for(let j = 0; j < arr2[0].length; j++) {
            let result = 0;
            const colArr2 = [];
            for(let k = 0; k < arr2.length; k++) {
                const value = arr2[k][j];
                colArr2.push(value);
            }
            
            for(let l = 0; l < rowArr1.length; l++) {
                result += rowArr1[l] * colArr2[l];
            }
            resultArr.push(result);
        }
        answer.push(resultArr);
    }
        
    return answer;
}