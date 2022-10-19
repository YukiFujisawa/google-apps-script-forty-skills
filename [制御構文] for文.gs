function myFunction9() {
  // ■ 構文
  // for (初期化式; 条件式; 加算式) {
  //   実行文
  // }
  const nums = [10, 20, 30, 40];
  Logger.log('nums.length=' + nums.length);
  for (let i = 1; i < nums.length; i += 2) {
    Logger.log('i=' + i);
    Logger.log('nums[i]=' + nums[i]);
  }
}

function myFunction9_2() {
  // for (変数 of 反復可能なオブジェクト) {
  //   実行文
  // }
  const nums = [10, 20, 30, 40];

  for (const num of nums) {
    Logger.log(num);
  }

}