function myFunction12() {

  // ■ 構文2
  // object['name1']; //値の参照
  // object['name2']; //関数の参照
  // object['name2']();//メソッド実行

  const person2 = {
    firstName: '太郎',
    lastName: '山田',
    fullName: function () {
      return this.firstName + this.lastName;
    }
  }
  Logger.log(typeof person2['fullName']);
  Logger.log(person2['fullName']());
}
