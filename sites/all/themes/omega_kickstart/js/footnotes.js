(function($) {
Drupal.behaviors.collapseFootnotes = {
        attach: function(context, settings) {
        var footnotes = $('ul.footnotes', context);
        footnotes.before('<h2 class="open-references">References <span class="ref-text">[Click to open/close]</span></h2>').hide();

        $('h2.open-references', context).click(function() {
                if(footnotes.css('display') == 'none') {
                        footnotes.show();
                        $(this).addClass('closed-ref');
                } else {
                        footnotes.hide();
                        $(this).removeClass('closed-ref');
                }
        });

	    $('a.footnote-label', context).click(function(e) {
		e.preventDefault();
                e.stopPropagation();

		//if(history.pushState) {
		   //history.pushState(null, null, this.hash);

                   $('html, body').animate({
                      scrollTop: $( $.attr(this, 'href') ).offset().top-$('#toolbar', context).height()-$('#zone-user-wrapper', context).height()
                   }, 500);
		//} else {
		   //location.hash = this.hash;
		//}
	    });

            $('a.see-footnote', context).click(function(e) {
  		e.preventDefault();
	 	e.stopPropagation();
                footnotes.show();
		$('.footnote-active', context).removeClass('footnote-active');

		//if(history.pushState) {
    			//history.pushState(null, null, this.hash);

			$('html, body').animate({
                     	   scrollTop: $( $.attr(this, 'href') ).offset().top-$('#toolbar', context).height()-$('#zone-user-wrapper', context).height()
                	}, 500);

			$($.attr(this, 'href')).addClass('footnote-active');
		//} else {
    			//location.hash = this.hash;
		//}
           });
  	}
};

Drupal.behaviors.smallThumbs = {
	attach: function(context) {
		$(".node-type-drug .field-name-field-drug-image img", context).each(function(i, e) {
			if(i > 0) {
				var $this = $(this);
				$this.attr('src', $this.attr('src').replace('grid_drug_image', 'thumbnail'));
				$this.removeAttr('width');
				$this.removeAttr('height');
			}
		});
	}
};
})(jQuery);
