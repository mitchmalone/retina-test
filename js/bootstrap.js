$script([
	'js/jquery.min.js',
	'js/twitter.bootstrap.min.js'
], function() {
	$script([
		'js/retina-test.js'
	], function() {
		$(document).ready(function(){
			RETINA.test.init();
		});
	});
});