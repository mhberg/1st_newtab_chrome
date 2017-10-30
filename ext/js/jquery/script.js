$(document).ready(function(){
var url = "https://quotes.rest/qod.json";

$.get(url, function (data) {
  var quote = data.contents.quotes[0].quote;
  var author = data.contents.quotes[0].author;
  var image = data.contents.quotes[0].background;
  
  $("#quoteblock").text(quote);
  $("#author").text(author);
  $("body").css({"background-image":"url(" + image + ")", "background-repeat":"no-repeat", "background-position":"center"});

});
});