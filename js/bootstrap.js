$script([
	'js/jquery.min.js'
], function() {
	$script([
		'js/prefixfree.min.js',
		'js/retina-test.js'
	], function() {
		$(document).ready(function(){
			RETINA.test.init();
		});
	});
});