function solution(players, callings) {
    
    // 이름 : 순위
    let playerObjects = {};
    // 순위 : 이름
    let scoreObjects = {};
    
    for(let i = 0; i < players.length; i++) {
        playerObjects[players[i]] = i + 1;
        scoreObjects[i + 1] = players[i];
    }
    
    //console.log(playerObjects);
    //console.log(scoreObjects);
    
    callings.forEach(call => {
        //console.log(call);
        
        let nameSave = scoreObjects[playerObjects[call] - 1];
        let scoreSave = playerObjects[call] - 1;
        
        playerObjects[call] -= 1;
        scoreObjects[playerObjects[call]] = call;
        playerObjects[nameSave] += 1;
        scoreObjects[playerObjects[nameSave]] = nameSave;
        
        //console.log(playerObjects);
        //console.log(scoreObjects);
        //console.log(name, count, nameSave);
    });
    
    return Object.values(scoreObjects);
}