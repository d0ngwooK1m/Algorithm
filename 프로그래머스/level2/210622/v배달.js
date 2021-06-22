function solution(N, road, K) {
    var answer = 0;
    let arr = Array(N + 1).fill(Infinity);
    let adj = Array.from(Array(N + 1), () => Array());
  
    road.forEach(info => {
      let a = info[0];
      let b = info[1];
      let c = info[2];
  
      adj[a].push({ to: b, weight: c });
      adj[b].push({ to: a, weight: c });
    });
  
    let check = [{ to: 1, weight: 0 }];
    arr[1] = 0;
    while (check.length) {
      let edge = check.pop();
      adj[edge.to].forEach(next => {
        if (arr[next.to] > arr[edge.to] + next.weight) {
          arr[next.to] = arr[edge.to] + next.weight;
          check.push(next);
        }
      });
      check.sort((a, b) => b[2] - a[2]);
    }
    arr.forEach(e => (e <= K ? ++answer : null));
    return answer;
  }

//  다익스트라 알고리즘을 사용하기 위한 arr배열 선언(1부터 사용하기위해 N+1만큼.)
// 인접한 정점을 가지는 배열을 선언.
// road에 있는 edge들을 adj에 넣어서 초기화.
// check 배열을 만들고 첫 시작 (1,0)을 넣음.
// arr[1] = 0으로 해주고 시작.
// check배열에 아무것도 없을때까지 while문을 돌림.
// check배열에서 edge를 하나씩 뽑아서 연결된 정점들의 arr의 값을 봐서 현재 값과 현재 값 + weight의 값 중 작은 값을 선택.
// 방문한 정점을 check에 넣어줌.
// check를 내림차순으로 정렬(위에서 pop으로 뽑기 때문.)