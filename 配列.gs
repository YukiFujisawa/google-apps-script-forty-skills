/**
 * 配列(Array)
 */
function myFunction5() {
  let arr = [10, 20, 30, 40];
  Logger.log(arr[0]);
  Logger.log(arr[1]);
  Logger.log(arr[2]);
  Logger.log(`arr[0]=${arr[0]}, 型=${typeof arr[0]}`); //=> arr[0]=10, 型=number
  Logger.log(`arr.length=${arr.length}, 型=${typeof arr.length}`); //=> arr.length=4, 型=number

  Logger.log(arr.length);
  Logger.log(arr[arr.length - 1]);
  arr.push(50);
  Logger.log(arr[arr.length - 1]);
  arr.pop();
  Logger.log(arr[arr.length - 1]);
}
