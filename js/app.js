$( document ).ready(function() {


$(".entire-list-item").on('click', function(){ 
    	$(this).find("div.circle").toggleClass("circle-done");
    	$(this).find("div.card-text").toggleClass("text-done");
});
  
    $('form').submit(function() {
  		event.preventDefault();
  		addItem();
});
function addItem (){
	var itemEntered = $("input#textbox").val();
	$("ul.shopping-list").append("<li class='entire-list-item'><div class='circle'><i class='material-icons'>done</i></div><div class='card-text'><h5>" + itemEntered + "</h5></div></li>");
};
});
    // end docready

