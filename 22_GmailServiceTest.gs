/**
 * Gメール(GmailService)
 */
function gmailServiceTest() {
  // ファイルIDを設定してください。以下例の場合、idは、"1Umtl5xxamlLlTAnlzdBKUu2mFNa34UvS"です。
  // 例：https://drive.google.com/file/d/1Umtl5xxamlLlTAnlzdBKUu2mFNa34UvS/view?usp=sharing
  const id = '';
  var file = DriveApp.getFileById(id)
  GmailApp.sendEmail('developer.for.udemy@gmail.com', 'Attachment example', 'Please see the attached file.', {
    attachments: [file.getAs(MimeType.PDF)],
    name: 'Automatic Emailer Script'
  });
}
