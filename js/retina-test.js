/*
	Retina Test Script
	Author: Mitch Malone
	Version 0.5
*/

(function($) {
	window.RETINA = $.extend(window.TM || {}, {
		test: {
			timer: null,
			
			init: function(){
				console.log('RETINA.test.init();');

				this.updateDisplay();
				this.eventListeners();
			},

			eventListeners: function() {
				console.log('RETINA.test.eventListeners();');
				
				var _this = this;

				$(window).on('resize', function(){
					_this.updateDisplay();
				});

				$('form').on('submit', function(e){
					var minutes = $(this).find('select').val();
					
					_this.startTest(minutes);

					e.preventDefault();
					e.stopPropagation();
					return false;
				});
			},
			
			updateDisplay: function() {
				console.log('RETINA.test.updateDisplay();');
				
				$('div#checkers, div#white').css({
					width: $(window).width(),
					height: $(window).height()
				});
			},

			startTest: function(minutes) {
				console.log('RETINA.test.startTest();');

				// Switch screens
				$('div#white').fadeOut('fast');
				$('div#checkers').show();

				var _this = this,
					seconds = minutes * 60;

				// Update the timer every second
				this.timer = setInterval(function(){
					--seconds;
			
					var sec = Math.floor(seconds % 60);

					// When the timer is done it's time to exit
					if(seconds === 1) _this.finishTimer();
					if(sec === 0) --minutes;
			
					// Update the timer text
					$('div#timer').html(Math.floor(minutes - 1) + ' : ' + sec);
				},1000);
			},
			
			finishTimer: function(callback) {
				console.log('RETINA.test.finishTimer();');

				clearInterval(this.timer);
				$('div#checkers').fadeOut('fast');
			}
		}
	});
})(jQuery);