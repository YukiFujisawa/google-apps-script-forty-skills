/**
 * プロパティストア活用(PropertiesService)
 */
function init() {
  // スプレッドシートIDを設定してください
  const spreadSheetId = ''
  const userProperties = PropertiesService.getUserProperties();

  userProperties.setProperties({
    spreadSheetServiceTestID: spreadSheetId,
  });
  Logger.log(userProperties.getProperty('spreadSheetServiceTestID'));
}

function init2() {
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperties()
}

/**
 * test.gsのコードです。
 */
function propertiesServiceTest() {
  init();
  const spreadSheetServiceTestId = PropertiesService.getUserProperties().getProperty('spreadSheetServiceTestID');
  Logger.log(spreadSheetServiceTestId);
  const spreadSheet = SpreadsheetApp.openById(spreadSheetServiceTestId);
  Logger.log(spreadSheet.getName());
}
