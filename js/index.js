
$(function(){
	var current = 1,
		_container = $('.container'),
		_li = $(".container ul li"),
		_prev = $('.prev'),
		_next = $('.next'),
		maxLength = _li.length,
		WIDTH = $('.wrap').width(),
		first = _li.first().clone(),
		last =  _li.last().clone();
	//複製第一張圖及最後一張圖的最前面及最後面
	first.appendTo($('.container ul'));
	last.prependTo($('.container ul'));


	function prev(callback){
		current = current - 1;
		if(current == 0){
			// $container.trigger(Events['SLIDER_ADD_COUNT']);
			prevAnimateLast(current, callback);
		}else if(current > 0){
			prevAnimate(current, callback);
		}
	}
	function prevAnimate(current, callback){
		_container.animate({
			left:current * WIDTH * -1
		}, callback)
	}

	function prevAnimateLast(_current, callback){
		_container.animate({
			left:_current * WIDTH * -1
		},function(){
			_container.css({
				left: maxLength * WIDTH * -1
			});
			current = maxLength;
			callback();
		})
	}

	function next(callback){
		current = current + 1;
		if(current == maxLength + 1){
			nextAnimateLast(current, callback);
		}else if(current < maxLength + 1){
			nextAnimate(current, callback);
		}
	}

	function nextAnimate(current, callback){
		_container.animate({
			left:current * WIDTH * -1
		}, callback)
	}

	function nextAnimateLast(_current, callback){
		_container.animate({
			left:_current * WIDTH * -1
		},function(){
			var firstImg = _current - maxLength;
			_container.css({
				left: firstImg * WIDTH * -1
			});
			current = firstImg;
			callback();
		})
	}

	function prevAnimatComplete() {}

	function nextAnimatComplete() {
		Timer.loop(actions, 3000);
	}

	// var _onSliderAddComplete = function(e) {

	// };

	// var ViewContainer = {
	// 	target: $('.container'),
	// 	getTarget: function() {
	// 		return this.target;
	// 	},
	// 	xPos: 0
	// };

	// Events = (function() {
	// 	var Events = {
	// 		'SLIDER_ADD_COUNT': 'SLIDER_ADD_COUNT'
	// 	};

	// 	return Events;
	// })();
	// ViewModel = (function() {
	// 	return {
	// 		index: 1,
	// 		getIndex: function() {
	// 			return this.index;
	// 		},
	// 		setIndex: function(index) {
	// 			this.index = index;
	// 		},
	// 		'SLIDER_SHOW_MAX_LENGTH': $li.length,
	// 		getSliderShowMaxLength: function() {
	// 			return this['SLIDER_SHOW_MAX_LENGTH'];
	// 		}
	// 	};
	// })();

	var Models = Models || {};

	Models.Page = (function() {
  		var _button = {},
  			current = 1,
  			_container = $('.container'),
  			_li = $(".container ul li"),
  			_prev = $('.prev'),
			_next = $('.next'),
			WIDTH = $('.wrap').width(),
  			SLIDER_SHOW_MAX_LENGTH = _li.length;

  		_button = {
  			prev: function(){
  				if(current == 0){
					prevAnimateLast(current, callback);
				}else if(current > 0){
					prevAnimate(current, callback);
				}
  			},
  			next: function(){

  			}
  		};

  		return _button;

	})();


	var Timer = Timer || {};

	Timer = (function() {
		var _timer = {},
			_isStop = false,
			_setIsStop = function() {};

		_setIsStop = function(isStop) {
			_isStop = isStop;
		};

		_timer = {
			openTimer: function() {
				_setIsStop(false);
				return this;
			},
			closeTimer: function() {
				_setIsStop(true);
				return this;
			},
			loop: function(actions, looptime) {
				var _loop = this['loop'];
				if(!_isStop) {
					setTimeout(actions, looptime);
				}
				return this;
			}
		};
		return _timer;
	})();

	var actions = function () {
		next(nextAnimatComplete);
	};


	init = function() {
		Timer.loop(actions, 3000);

		_container.css({
			left: current * WIDTH * -1
		});
	};

	function startLoop() {
		setTimeout(function() {
			Timer.openTimer().loop(actions, 3000)
		}, 5000);
	}

	init();


	_prev.on('click', function() {
		prev(prevAnimatComplete);
		Timer.closeTimer();
		startLoop();
	});
	_next.on('click', function() {
		next(nextAnimatComplete);
		Timer.closeTimer();
		startLoop();
	});
	// _container.on('hover'), function(){
	// 	stopTime();
	// }
	// $container.on(Events['SLIDER_ADD_COUNT'], _onSliderAddComplete)

	// $start.on('click',function(){
	// 	autoPlay();
	// });
	// $stop.on('click',function(){

	// })
});