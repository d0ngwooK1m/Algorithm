const solution = (files) => {
    let answer = [];
    const arr = [];
    for (let i = 0; i < files.length; i++) {
      const value = files[i].split(/(\d+)/g);
      const file = files[i];
  
      //1번째 유의사항 해결
      const head = value[0].toUpperCase();
      let number = value[1];
      // 2번째 유의사항 해결
      if (number.length > 5) {
        number = number.substring(0, 5);
      }
      // 3번째 유의사항 해결
      number = Number(number);
      arr.push({ file: file, head: head, number: number, idx: i });
    }
    //정렬
    arr.sort((a, b) => {
      if (a.head < b.head) return -1;
      else if (a.head > b.head) return 1;
      else {
        if (a.number > b.number) return 1;
        else if (a.number < b.number) return -1;
        else {
          //4번째 유의사항 해결
          if (a.idx < b.idx) return -1;
          else return 1;
        }
      }
    });
    //답 구하기
    for (let i = 0; i < arr.length; i++) {
      answer.push(arr[i].file);
    }
    return answer;
  };