// DOCUMENT READY FUNCTION
$(document).ready(function () {
	
	// CLICK ON STRIPE
	$(".stripe").on("click", function() {
		
		closeStripe();
		
		openStripe( $(this) );
		
	});
	
	
}); // end of document.ready


// CLOSE OPEN STRIPE
function closeStripe() {
	
	$(".open").removeClass("open");
	
}


// OPEN CLICKED STRIPE
function openStripe(stripe) {
	
	stripe.addClass("open");
	
}


