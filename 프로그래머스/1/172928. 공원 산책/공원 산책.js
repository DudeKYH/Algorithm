function checkObstacle(direction, distance, park, startX, startY) {
    if(direction === "E") {
        for(let i = 1; i <= distance; i++) {
            if(park[startY][startX + i] === "X")
                return true;
        }
    }
    else if(direction === "W") {
        for(let i = 1; i <= distance; i++) {
            if(park[startY][startX - i] === "X")
                return true;
        }
    }
    else if(direction === "N") {
        for(let i = 1; i <= distance; i++) {
            if(park[startY - i][startX] === "X")
                return true;
        }
    }
    else if(direction === "S") {
        for(let i = 1; i <= distance; i++) {
            if(park[startY + i][startX] === "X")
                return true;
        }
    }
    else {
        return false;
    }
    
    
    return false;
}

function solution(park, routes) {
    var answer = [];
    
    const parkRow = park[0].length;
    const parkCol = park.length;
    let startX = 0;
    let startY = 0;
    
    for(let i = 0; i < park.length; i++) {
        for(let j = 0; j < park[0].length; j++) {
            if(park[i][j] === "S") {
                startX = j;
                startY = i;
                break;
            }
        }
    }
    
    for(let i = 0; i < routes.length; i++) {
        const str = routes[i].split(" ");
        
        const direction = str[0];
        const distance = parseInt(str[1]);
        
        // 동
        if(direction === "E") {
            if(startX + distance >= parkRow) 
                continue;
            if(checkObstacle(direction, distance, park, startX, startY))
                continue;
            startX += distance;
        }
        // 서
        else if(direction === "W") {
            if(startX - distance < 0) 
                continue;
            if(checkObstacle(direction, distance, park, startX, startY))
                continue;
            startX -= distance;
        }
        // 북    
        else if(direction === "N") {
           if(startY - distance < 0) 
                continue;
            if(checkObstacle(direction, distance, park, startX, startY))
                continue;
            startY -= distance;
        }
        // 남
        else if(direction === "S") {
            if(startY + distance >= parkCol) 
                continue;
            if(checkObstacle(direction, distance, park, startX, startY))
                continue;
            startY += distance;
        }
        else {
            continue;
        }
    }
    
    answer.push(startY);
    answer.push(startX);
    
    return answer;
}