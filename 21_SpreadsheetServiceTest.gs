/**
 * スプレッドシート(SpreadsheetService)
 */
function spreadsheetServiceTest() {
  // スプレッドシートIDを設定してください。以下例の場合、idは、"13xJAMVd9Hf4ptMG899LJP8Ec4u087nKtHqIYtdPVJa8"です。
  // 例：https://docs.google.com/spreadsheets/d/13xJAMVd9Hf4ptMG899LJP8Ec4u087nKtHqIYtdPVJa8/edit#gid=0
  const id = '';
  const spreadsheet = SpreadsheetApp.openById(id)
  const sheet = spreadsheet.getSheetByName('page1');
  if (sheet != null) {
    Logger.log(sheet.getIndex())
  }

  const range = sheet.getDataRange();
  const values = [['列1', '列2', '列3', '列4', '列5'], ['値1（更新）', '値2', '値3', '値4', '値5']];
  range.setValues(values);
}
