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

				$('button.start-test').on('click', function(e){
					var minutes = $('form#testSettings select#minutes').val(),
						color = $('form#testSettings select#color').val();

					if(color === '' && minutes === null)
						alert('Please choose a duration and color!');
					else if (color === '')
						alert('Please choose a color!');
					else if (minutes === null)
						alert('Please choose a duration!');
					else
						_this.startTest(minutes, color);

					e.preventDefault();
					e.stopPropagation();
					return false;
				});
				
				$('div#checkers a.finish').on('click', function(e){
					_this.finishTimer();

					e.preventDefault();
					e.stopPropagation();
					return false;
				});
				
				$('div#black a.close').on('click', function(e){
					_this.closeTest();

					e.preventDefault();
					e.stopPropagation();
					return false;
				});
			},
			
			updateDisplay: function() {
				console.log('RETINA.test.updateDisplay();');
				
				$('div#test, div#checkers, div#black').css({
					width: $(window).width(),
					height: $(window).height()
				});
			},

			startTest: function(minutes, color) {
				console.log('RETINA.test.startTest();');

				// Switch screens
				$('div#test, div#checkers, div#black').show();
				$('#black').removeClass().addClass(color);
				$('#goSettings').modal('hide');

				var _this = this,
					seconds = minutes * 60;

				// Update the timer every second
				this.timer = setInterval(function(){
					--seconds;
			
					var sec = Math.floor(seconds % 60);

					// When the timer is done it's time to exit
					if(seconds === 1) _this.finishTimer(color);
					if(sec === 0) --minutes;
			
					// Update the timer text
					var secText = (sec < 10) ? '0' + sec : sec;
					$('div#timer').html(Math.floor(minutes - 1) + ' : ' + secText);
				},1000);
			},
			
			finishTimer: function() {
				console.log('RETINA.test.finishTimer();');

				this.playSound();
				clearInterval(this.timer);
				$('div#checkers').fadeOut('fast');
			},
			
			playSound: function() {
				console.log('RETINA.test.playSound();');
				
				// Play audio, cross-browser
				$('div#sound').html('<audio autoplay="autoplay"><source src="./audio/ding.mp3" type="audio/mpeg" /><source src="./audio/ding.ogg" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="./audio/ding.mp3" /></audio>');
				
				// Remove audio once it's been played
				setTimeout(function(){
					$('div#sound').html('');
				},3000);
			},
			
			closeTest: function() {
				console.log('RETINA.test.closeTest();');
				
				// Close everything
				$('div#test, div#checkers, div#black').hide();
			}
		}
	});
})(jQuery);