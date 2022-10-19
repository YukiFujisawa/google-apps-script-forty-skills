/**
 * [便利メソッド]filter()
 */
function myFunction16() {
  const array = [10, 20, 30, 40, 50];
  const array2 = array.filter((value) => {
    return value > 20;
  })
  // Logger.log(array2);

  members = [];
  for (let i = 0; i < 10; i += 1) {
    members.push(new Member2('太郎' + i + '号', '山田', i * 10));
  }
  Logger.log(members);
  const members2 = members.filter((member) => {
    return member.age > 50;
  });
  Logger.log(members2);
}

class Member2 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName() {
    return this.lastName + this.firstName + 'さん';
  }
}