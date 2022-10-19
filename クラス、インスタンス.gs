function myFunction13() {
  const member = new Member('太郎', '山田');
  const member2 = new Member('花子', '山田');
  Logger.log(member.fullName());
  Logger.log(member2.fullName());

  members = [];
  for (let i = 0; i < 10; i += 1) {
    members.push(new Member('太郎' + i + '号', '山田'));
  }
  Logger.log(members);
  for (const member of members) {
    Logger.log(member.fullName());
  }
}

// class クラス名 {
//   // インスタンス初期化の関数
//   constructor(value1, value2) {
//     this.name1 = value1;
//     this.name2 = value2;
//   }
//   method() {
//     // 実行文
//   } 
// }
class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.lastName + this.firstName + 'さん';
  }
}