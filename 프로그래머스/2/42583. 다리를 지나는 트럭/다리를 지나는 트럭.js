function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    const maxNum = truck_weights.length;
    const waitTruck = truck_weights;
    const completeTruck = [];
    const crossTruck = [];
    let order = 0;
    let currentWeight = 0;
    
    while(completeTruck.length < maxNum) {
        
        for(let i = 0; i < crossTruck.length; i++) {
            crossTruck[i].count += 1;
        }  
             
        if(crossTruck.length > 0) {
            if(crossTruck[0].count === bridge_length) {
                const truck = crossTruck.shift();
                currentWeight -= truck.num;
                completeTruck.push(truck.num);
            }
        }
        
                if(crossTruck.length < bridge_length) {
            const truckWeight = waitTruck.shift();
            if(currentWeight + truckWeight <= weight) {
                currentWeight += truckWeight;
                crossTruck.push({num: truckWeight, count: 0});
            }
            else {
                waitTruck.unshift(truckWeight);
            }
        }
        
        order++;
        
        //console.log(order, ": ", crossTruck);
    }
    
    answer = order;
    
    return answer;
}