function rotation(n, d, arr) {
    for (let i = 0; i < d; i++) {
      let temp = arr[0];
      for (let j = 0; j < arr.length; j++) {
        if (j != arr.length - 1) {
          arr[j] = arr[j + 1];
        } else {
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  let arr = [1, 2, 3, 4, 5];
  console.log(rotation(5, 2, arr));
  