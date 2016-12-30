+function($) {
  'use strict';
	var $levels = $('.levels');
	var $level1 = $levels.find('.levels-item');
	var $backdrop = $('.appbase');	
	var activeClass = 'active';
	var $lvlsinput = $('.lvls-input');

	$(document)
		.on('mouseenter focusin', '.la-levels', function () {
			var $this = $(this);
			var $el = $this.parent('.levels-item');
			$backdrop.addClass(activeClass);
			$level1.removeClass(activeClass).removeClass("f-active");
			$el.addClass(activeClass);
		})
		.on('mouseleave', '.levels', function () {
			$level1.removeClass(activeClass);
			$backdrop.removeClass(activeClass);
			$('.d-active').addClass('f-active');
		})
		.on('mouseenter', '.d-levels', function () {
			$level1.removeClass(activeClass).removeClass("f-active");
			$backdrop.removeClass(activeClass);
		})
		.on('click', '.limbo-search', function () {
			$lvlsinput.focus();
			return false;
		})
		.on('focus','.lvls-input', function(){
			var $this = $(this);
			$this.addClass("focus");
		})
		.on('blur','.lvls-input',function () {
			var $this = $(this);
			$this.removeClass("focus");
		});
				
}(jQuery);