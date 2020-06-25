function doGet() {
  return HtmlService.createTemplateFromFile('location').evaluate();
}

function includeExternalFile(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
