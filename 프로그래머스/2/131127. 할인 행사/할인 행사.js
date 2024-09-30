function solution(want, number, discount) {
    var answer = 0;
    const items = {};
    
    for(let i = 0; i < want.length; i++) {
        items[want[i]] = number[i];
    }
    
    console.log("1 : ", items);    

    for(let i = 0; i <= discount.length - 10; i++) {
        const saleItems = {};
        for(let num = 0; num < 10; num++) {
            if(!saleItems[discount[i + num]])
                saleItems[discount[i + num]] = 1;
            else 
                saleItems[discount[i + num]] += 1;
        }
        
        if(checkItems(items, saleItems))
            answer += 1;
    }
    
    return answer;
}

function checkItems(items, saleItems) {
    for(const item in items) {
        const count = items[item];
        
        if(!saleItems[item]) {
            return false;
        }
        
        if(saleItems[item] < count)
            return false;
    }
    return true;
}