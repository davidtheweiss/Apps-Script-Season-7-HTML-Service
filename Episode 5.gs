const spreadsheetId = '13tsP62ZUlmYiNaoc3ndeuj1Jjzbm9HmawSNqsiPXAXI';

function addMenuItem() {
  SpreadsheetApp.getUi()
  .createMenu('My Functions')
  .addItem('Show Dialog', 'showModal')
  .addToUi();
}

function showModal() {
  const userInterface = HtmlService.createHtmlOutputFromFile('modal');
  SpreadsheetApp.getUi().showModelessDialog(userInterface, 'My modal');
}

function inputData(data) {
  SpreadsheetApp.openById(spreadsheetId).getSheetByName('Sheet1').appendRow([data]);
}
