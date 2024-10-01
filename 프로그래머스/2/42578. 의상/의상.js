function solution(clothes) {
    var answer = 0;
    
    const clothesObject = {};
    
    for(let i = 0; i < clothes.length; i++) {
        const clothesType = clothes[i][1];
        const clothesName = clothes[i][0];
        
        if(!clothesObject[clothesType])
            clothesObject[clothesType] = 1;
        else
            clothesObject[clothesType] += 1;
    }
    
    let result = 1;
    for(const type in clothesObject) {
        result *= clothesObject[type] + 1;
    }
    
    answer = result - 1;
    
    return answer;
}