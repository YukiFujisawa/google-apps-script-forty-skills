/**
 * [便利メソッド]reduce()
 */
function myFunction17() {
  const array = [10, 20, 30, 40, 50];
  const array2 = array.filter((value) => {
    return value > 20;
  });
  // Logger.log(array2);

  const array3 = array.reduce((acc, value) => {
    // acc = [];
    // value = 30;
    if (value > 20) {
      acc.push(value); // [].push(30)
    }
    return acc; // [30]
  }, []);
  Logger.log(array3);
}
