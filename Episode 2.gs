function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setTitle('Davidtheweiss')
  .setFaviconUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paris_RER_D_icon.svg/512px-Paris_RER_D_icon.svg.png');
}




/*
<meta name="apple-mobile-web-app-capable" content="..."/>
<meta name="google-site-verification" content="..."/>
<meta name="mobile-web-app-capable" content="..."/>
<meta name="viewport" content="..."/>
*/
