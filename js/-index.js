
$(function(){
	var $container = $('.container');
	var WIDTH = $('.wrap').width();
	var isComplete = true;

	var $li = $('.container ul li');
	var first = $li.first().clone();
	var last =  $li.last().clone();
	first.appendTo( $('.container ul') );
	last.prependTo( $('.container ul') );

	// $.ajax({
	// 		url: 'data',
	// 		type: 'GET',
	// 		dataType: 'json',
	// 		success: function(data) {
	// 			var dataName = data;
	// 			var dataLength = dataName.length;
	// 			// var i = 0;
	// 			console.log(dataName);
	// 			// for(i; i<dataLength; i++){
	// 			// 	$(this).append('<img src="' + dataName[i] + '" alt="1" />');
	// 			// }
	// 		},
	// 		 error: function() {
	// 		 	console.log("error");
	// 		}
	// 	});
	var index = 1;
	var LENGTH = $li.length;

	// Event
	$('.prev').on('click',{"custom":-1} , doSlide);
	$('.next').on('click',{"custom": 1} , doSlide);

	$container.css("left",-WIDTH );

	function doSlide( e ){
		if( !isComplete ){
			return false;
		}

		isComplete = false;
		if (e != null) {
			e.preventDefault();
			index = index + e.data.custom;
		};
		$container.animate({
			left: 	index * WIDTH * -1
		}, 350, function(){
			if ( index == 0) {
				index = LENGTH - 2;
				$container.css('left', index * WIDTH * -1);
			}else if( index == LENGTH - 1){
				index = 1;
				$container.css('left', index * WIDTH * -1);
			}
			$li.removeClass('on').eq(index).addClass('on');
			isComplete = true;
		});
	}
});