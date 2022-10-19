/**
 * [便利メソッド]map()
 */
function myFunction15() {
  const array = [10, 20, 30];
  const array2 = array.map((value) => {
    return value * 2;
  })
  // Logger.log(array2);

  members = [];
  for (let i = 0; i < 10; i += 1) {
    members.push(new Member('太郎' + i + '号', '山田'));
  }
  Logger.log(members);
  const members2 = members.map((member) => {
    return member.fullName();
  })
  Logger.log(members2);
}

