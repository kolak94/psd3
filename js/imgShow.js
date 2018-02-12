$(document).ready(function(){
	$(window).scroll(function(){
		$('.hideme').each(function(i){
			var bottomImg = $(this).offset().top + $(this).outerHeight();
			var bottomWindow = $(window).scrollTop() + $(window).height();
			if(bottomWindow > bottomImg) {
				$(this).animate({
					'opacity': '1'
				}, 500);
			}
		})
	})
})