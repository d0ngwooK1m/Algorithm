let input = `5 5
1 2 3 4 5
5 4 3 2 1
2 3 4 5 6
6 5 4 3 2
1 2 1 2 1`.split('\n');

let numbers = input[0].split(' ').map(x => Number(x))
let score = [];
for (let i=1; i<6; i++) {
    score.push(input[i].split(' ').map(x => Number(x)));
}

let blocks = [
    [[0,1], [0,2], [0,3]],
    [[1,0], [2,0], [3,0]],
    [[1,0], [1,1], [1,2]],
    [[0,1], [1,0], [2,0]],
    [[0,1], [0,2], [1,2]],
    [[1,0], [2,0], [2,-1]],
    [[0,1], [0,2], [-1,2]],
    [[1,0], [2,0], [2,1]],
    [[0,1], [0,2], [1,0]],
    [[0,1], [1,1], [2,1]],
    [[0,1], [1,0], [1,1]],
    [[0,1], [-1,1], [-1,2]],
    [[1,0], [1,1], [2,1]],
    [[0,1], [1,1], [1,2]],
    [[1,0], [1,-1], [2,-1]],
    [[0,1], [0,2], [-1,1]],
    [[0,1], [0,2], [1,1]],
    [[1,0], [2,0], [1,1]],
    [[1,0], [2,0], [1,-1]],
]

let ans = 0;

for (let i=0; i<numbers[0]; i++) {
    for (let j=0; j<numbers[1]; j++) {
        for (let k=0; k<19; k++) {
            let ok = true;
            let sum = score[i][j];
            for (let l=0; l<3; l++) {
                let x = i+blocks[k][l][0];
                let y = j+blocks[k][l][1];
                if (0 <= x && x < numbers[0] && 0 <= y && y < numbers[1]) {
                    sum += score[x][y];
                } else {
                    ok = false;
                    break;
                }
            }
            if (ok && ans < sum) {
                ans = sum;
            }
        }
    }
}

console.log(ans);