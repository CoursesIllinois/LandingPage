$(document).ready(function() {
	if(jQuery){
		setupToolBar();
		setupToolTips();
	}
});

var setupToolTips = function(){
	$('.tip').each(function(index) {
		$(this).tipsy({fade: true, html:true});
	});
}

var setupToolBar = function(){
	// script to make toolbar follow user
	$(window).scroll(function() {
	    var navigation = $('#toolbar')[0];
	    if (window.pageYOffset >= 713) {
			navigation.style.position = 'fixed';
			navigation.style.top = '0';
	    } else {
			navigation.style.position = 'static';
	    }
	});
};