function solution(id_list, report, k) {
    var answer = [];
    
    let userObjects = { };
    let reportObjects = { };
    
    for(let i = 0; i < id_list.length; i++) {
        userObjects[id_list[i]] = 0;
    }
    
    
    for(let i = 0; i < report.length; i++) {
        const str = report[i].split(' ');
        const reportUser = str[0];
        const reportedUser = str[1];
        
        if(!reportObjects[reportedUser]) {
            reportObjects[reportedUser] = {count: 0, userSet: new Set()};
        }
        if(!reportObjects[reportedUser].userSet.has(reportUser)) {
            reportObjects[reportedUser].userSet.add(reportUser);
            reportObjects[reportedUser].count += 1;
        } 
    }
    
    
    for(const reported in reportObjects) {
        console.log(reported);
        reportObjects[reported].userSet.forEach((value, key, set) => {
            if(reportObjects[reported].count >= k) {
                userObjects[value] += 1;
            }
        });
    }
    
    answer = Object.values(userObjects);
    
    return answer;
}