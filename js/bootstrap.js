$script([
	'js/jquery.min.js',
	'js/twitter.bootstrap.js'
], function() {
	$script([
		'js/retina-test.js'
	], function() {
		$(document).ready(function(){
			// No console logging
			console.log = $.noop;
			
			RETINA.test.init();
		});
	});
});