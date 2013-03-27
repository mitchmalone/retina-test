$script([
	'js/jquery.min.js'
], function() {
	$script([
		'js/twitter.bootstrap.js',
		'js/retina-test.js'
	], function() {
		$(document).ready(function(){
			// No console logging
			console.log = $.noop;
			
			RETINA.test.init();
		});
	});
});