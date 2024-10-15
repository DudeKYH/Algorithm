function getUseTime(enterTime, leaveTime) {
    const enterStr = enterTime.split(":");
    const leaveStr = leaveTime.split(":");
    
    const enterHour = parseInt(enterStr[0]);
    const enterMinute = parseInt(enterStr[1]);
    
    const leaveHour = parseInt(leaveStr[0]);
    const leaveMinute = parseInt(leaveStr[1]);
    
    return (leaveHour - enterHour) * 60 + (leaveMinute - enterMinute);
}

function solution(fees, records) {
    var answer = [];
    
    const defaultUseTime = fees[0];
    const defaultFee = fees[1];
    const extraUseTime = fees[2];
    const extraFee = fees[3];
    
    const enterCars = {};
    const leaveCars = {};
    const feeCars = {};
    for(let i = 0; i < records.length; i++) {
        const arr = records[i].split(" ");
        const time = arr[0];
        const carNumber = arr[1];
        const history = arr[2];
        
        if(!feeCars[carNumber]) feeCars[carNumber] = defaultFee;
        
        if(history === "IN") {
            if(!enterCars[carNumber]) enterCars[carNumber] = [];
            enterCars[carNumber].push(time);
        }
        else {
            if(!leaveCars[carNumber]) leaveCars[carNumber] = [];
            leaveCars[carNumber].push(time);
        }
    }
    
    for(const carNumber in enterCars) {
        let useTime = 0;
        while(enterCars[carNumber].length > 0) {
            const enterTime = enterCars[carNumber].shift();
            let leaveTime = "23:59";
            if(leaveCars[carNumber] && leaveCars[carNumber].length !== 0)
                leaveTime = leaveCars[carNumber].shift();
            
            useTime += getUseTime(enterTime, leaveTime);
        }
        const extraTime = useTime - defaultUseTime;
        if(extraTime > 0) {
            feeCars[carNumber] += Math.ceil(extraTime / extraUseTime) * extraFee;
        }
    }
    
    const sortFeeCars = Object.entries(feeCars).sort((a, b) => a[0] - b[0]);
    sortFeeCars.forEach(fee => answer.push(fee[1]));
    return answer;
}
