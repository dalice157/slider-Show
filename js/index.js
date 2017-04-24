
$(function(){
	var index = 1,
		$container = $('.container'),
		$li = $(".container ul li"),
		$maxLength = $li.length,
		WIDTH = $('.wrap').width(),
		$prev = $('.prev'),
		$next = $('.next'),
		$start = $('.start'),
		first = $li.first().clone(),
		last =  $li.last().clone(),
		// ViewModel = ViewModel || {},
		Events = Events || {},
		init = function() {},
		timer = {};
	//複製第一張圖及最後一張圖的最前面及最後面
	first.appendTo($('.container ul'));
	last.prependTo($('.container ul'));

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



	function prev(callback){
		index = index - 1;
		if(index == 0){
			// $container.trigger(Events['SLIDER_ADD_COUNT']);
			prevAnimateLast(index, callback);
		}else if(index > 0){
			prevAnimate(index, callback);
		}
	}
	function prevAnimate(index, callback){
		$container.animate({
				left:index * WIDTH * -1
			}, callback)
	}

	function prevAnimateLast(_index, callback){
		$container.animate({
			left:_index * WIDTH * -1
		},function(){
			$container.css({
				left: $maxLength * WIDTH * -1
			});
			index = $maxLength;
			callback();
		})
	}

	function next(callback){
		index = index + 1;
		if(index == $maxLength + 1){
			nextAnimateLast(index, callback);
		}else if(index < $maxLength + 1){
			nextAnimate(index, callback);
		}
	}

	function nextAnimate(index, callback){
		$container.animate({
			left:index * WIDTH * -1
		}, callback)
	}

	function nextAnimateLast(_index, callback){
		// index = $maxLength + 1;
		$container.animate({
			left:_index * WIDTH * -1
		},function(){
			var firstImg = _index - $maxLength;
			$container.css({
				left: firstImg * WIDTH * -1
			});
			index = firstImg;
			callback();
		})
	}

	function startTime() {
		var _timer = setInterval(function() {
			next();
		}, 3000);
		return _timer;
	}

	function stopTime(timer) {
		clearInterval(timer);
	}


	function prevAnimatComplete() {}

	function nextAnimatComplete() {}

	// var _onSliderAddComplete = function(e) {

	// };

	init = function() {
		// timer = startTime();
		$container.css({
			left: index * WIDTH * -1
		});
	};

	init();



	$prev.on('click', function() {
		// stopTime()
		prev(prevAnimatComplete);
	});
	$next.on('click', function() {
		// stopTime();
		next(nextAnimatComplete);
	});
	// $container.on(Events['SLIDER_ADD_COUNT'], _onSliderAddComplete)

	// $start.on('click',function(){
	// 	autoPlay();
	// });
	// $stop.on('click',function(){

	// })
});