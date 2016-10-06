// DOCUMENT READY FUNCTION
$(document).ready(function () {
	
	// on tab click
	$(".stripe").on("click", function() {
	
		// close all open tabs
		$(this).siblings().children(".content").slideUp();
		
		// open just clicked tab
		$(this).children(".content").slideToggle();
	
	});
	
}); // end of document.ready
