function doGet() {
  return HtmlService.createTemplateFromFile('ep3_index').evaluate();
}

function includeExternalFile(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
