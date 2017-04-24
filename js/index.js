
$(function(){
	var index = 1,
		$container = $('.container'),
		$li = $(".container ul li"),
		$maxLength = $li.length,
		WIDTH = $('.wrap').width(),
		$prev = $('.prev'),
		$next = $('.next'),
		first = $li.first().clone(),
		last =  $li.last().clone();
	//複製第一張圖及最後一張圖的最前面及最後面
	first.appendTo( $('.container ul') );
	last.prependTo( $('.container ul') );

	$container.css({
		left: index * WIDTH * -1
	});

	$prev.on('click',function(){
		if(index == 1){
			index = index-1;
			$container.animate({
				left:index * -WIDTH
			},function(){
				$container.css({
					left: $maxLength * -WIDTH
				});
				index = $maxLength;
			})
		}else if(index > 1){
			index = index - 1;
			$container.animate({
				left:index * -WIDTH
			})
		}
	});
	$next.on('click',function(){
		if(index == $maxLength){
			index = $maxLength + 1;
			$container.animate({
				left:index * -WIDTH
			},function(){
				var firstImg = index - $maxLength;
				$container.css({
					left: firstImg * -WIDTH
				});
				index = 1;
			})
		}else if(index < $maxLength){
			index = index + 1;
			$container.animate({
				left:index * -WIDTH
			})
		}
	});
});