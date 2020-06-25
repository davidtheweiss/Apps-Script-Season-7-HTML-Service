function doGet() {
  return HtmlService.createTemplateFromFile('history').evaluate().setFaviconUrl('https://www.rodeoticket.com/img/food.png');
}

function includeExternalFile(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
