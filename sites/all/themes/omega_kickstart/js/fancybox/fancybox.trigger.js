(function ($) {
  Drupal.behaviors.cloudZoomFancyBox = {
    attach: function(context, settings) {
      var cloudZoom = $('.cloud-zoom-container #wrap', context).click(function() {
			var imageUrl = $(this).find('a#cloud-zoom').attr('href');
			$.fancybox(imageUrl);
	  });
    }
  }
})(jQuery);