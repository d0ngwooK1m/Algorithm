const l = 100;
const w = 100;
const tw = [10];

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge = Array(bridge_length).fill(0);
    let passedT = [];
    let cnt = 0;
    const trucks = truck_weights.length;
    

    while (passedT.length !== trucks) {
        let check = bridge.reduce((a, b) => a+b);
        if (check <= weight) {
            if (bridge[0] === 0) {
                bridge.shift();
                if (truck_weights.length === 0) bridge.push(0);
                else if (check+truck_weights[0] > weight) bridge.push(0);
                else bridge.push(truck_weights.shift());
                if (check !== 0) cnt++;
            } else {
                passedT.push(bridge.shift());
                if (truck_weights.length === 0) bridge.push(0);
                else if (check+truck_weights[0] > weight) bridge.push(0);
                else bridge.push(truck_weights.shift());
                if (check !== 0) cnt++;;
            }
        }  else  {
            if (bridge[0] === 0) {
                bridge.shift();
                bridge.push(0);
                cnt++;
            } else {
                passedT.push(bridge.shift());
                bridge.push(0);
                cnt++;
            }
        }
        console.log(passedT, bridge, truck_weights, cnt);
    }
    answer+=cnt+1;
        
    return answer;
}

console.log(solution(l, w, tw));