function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function includeExternalFile(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function sendPigLatinEmail(recipient, body) {
  
  const subject = 'Your Secret Pig Latin Message';
  const user = Session.getActiveUser().getEmail();
  
  GmailApp.sendEmail(recipient, subject, body);
  return GmailApp.search(`from:(${user})`)[0].getId();

}
