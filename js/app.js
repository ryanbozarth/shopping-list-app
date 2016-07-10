$( document ).ready(function() {
    
    $( ".button-fab" ).click(function() {
  		$("entire-list-item:last-child").append( "<li></li>" )
});








    $(".circle").click(function(){ 
    	$(this).toggleClass("circle-done");
    	$(".card-text").toggleClass("text-done");
});	

})
