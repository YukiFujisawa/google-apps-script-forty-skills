/**
 * フォーム(FormsService)
 */
function formsServiceTest() {
  // フォームIDを設定してください。
  const id = ''
  const form = FormApp.openById(id);
  const items = form.getItems(FormApp.ItemType.LIST);
  for(item of items){
    Logger.log(item.getTitle()); 
    const listItem = item.asListItem();
    const choices = ['オプション1', 'オプション2', 'オプション3'];
    const choicesObj = choices.map((choice) => {
      return listItem.createChoice(choice);
    })
    Logger.log(choicesObj); 
    listItem.setChoices(choicesObj);
  }
}
