function myFunction11() {
  let 産地 = '長野県';
  let 取水地 = '安曇野';

  const ご飯を炊く = function (産地, 取水地) {
    Logger.log(産地 + '産の米を研ぐ');
    Logger.log(取水地 + 'で取れた水を入れる')
    Logger.log('炊く');
    Logger.log('蒸す');
    return 産地 + 'の米、' + 取水地 + 'の水で作ったご飯。';
  }

  Logger.log(ご飯を炊く(産地, 取水地));

  産地 = '秋田県';
  取水地 = '白神山地';
  Logger.log(ご飯を炊く(産地, 取水地));
}
