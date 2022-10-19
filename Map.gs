function myFunction18() {
  const map = new Map();
  for (let i = 0; i < 10; i += 1) {
    map.set(i, new Member('太郎' + i + '号', '山田'));
  }
  for (const [key, member] of map) {
    Logger.log(key);
    Logger.log(member.fullName());
  }
  Logger.log(map.get(0));
}
