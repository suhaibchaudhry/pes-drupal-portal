(function ($) {
  /**
   *  Add a relevant body class when Commerce Kickstart Demo mode is on.
   */
  Drupal.behaviors.activeBarClass = {
    attach: function(context, settings) {            
      var isDemo = $('div#activebar-container').size();
      if(isDemo) {
        $('body').addClass('activebar-container');
      }
    }
  };
  
  Drupal.behaviors.mainMenuToggle = {
    attach: function(context, settings) {            
      $('.region-menu .navigation').before('<a href="#" class="menu-toggle" title="' + Drupal.t("Toggle Menu") + '">' +
          '<span class="line first-line first"></span>' +
          '<span class="line"></span>' +
          '<span class="line"></span>' +
          '<span class="line last-line last"></span>' +
          '<span class="toggle-help">' + Drupal.t("Menu") + '</span></a>');
      $('.navigation .primary-menu h2, .navigation .second-menu h2').removeClass('element-invisible');
      
      $('.region-menu .menu-toggle').click(function(){
        $('.navigation').slideToggle();
      });
    }
  };
  
  Drupal.behaviors.betterEventSlider = {
    attach: function(context, settings) {            
      var bxclasses = '.bx-wrapper, bx-wrapper .bx-viewport';
      $(window).load(function(){
        var liheight = $('ul.event-slider li:first-child').height();
        $(bxclasses).css('height', liheight);
      });
      
      $(window).resize(function(){
        var liheight = $('ul.event-slider li:first-child').height();
        $(bxclasses).css('height', liheight);
      });
    }
  };

  // Handle user toolbar when user is admin and have admin toolbar enabled.
  Drupal.behaviors.customToolbar = {
    attach: function(context, settings) {
      if ($('body').hasClass('toolbar')) {
        $(window, context).resize(function() {
          var toolbarHeight = $('div#toolbar').height();
          $('.zone-user-wrapper').css('top', toolbarHeight + 'px');
        });
      }
    }
  }

  Drupal.behaviors.submitInquiry = {
	attach: function(context, settings) {
		var that = this;
		var $inquiryBlock = $("#block-webform-client-block-78");
		if($('#webform-client-form-78').length > 0) {
		$('.view-property-listings .field-name-node-link a').before('<a href="#" class="submit-inquiry-button" name="submit-inquiry-form" title="Submit Inquiry">Submit Inquiry</a>');
		
		$('.page-node .node-property .group-right').after('<a href="#" class="submit-inquiry-button" name="submit-inquiry-form" title="Submit Inquiry">Submit Inquiry</a>');

		var d = $inquiryBlock.dialog({
		      width: 'auto',
                      height: 'auto',
                      modal: true,
		      autoOpen: false,                    
                      resizable: false,
		      draggable: false
                });
	        
		var step_1 = $('#webform-component-reservation-info');		
		var step_2 = $('#webform-component-contact-information');

                $('.inquiry-steps a.next-step').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			window.scrollTo(0,0);
			step_1.hide();
			step_2.show();
		});

		$('.inquiry-steps a.back-step').on('click', function(e) {
			e.preventDefault();
                        e.stopPropagation();
			window.scrollTo(0,0);	
			step_2.hide();
			step_1.show();
		});

		$('a.submit-inquiry').on('click', function(e) {
			$('#webform-client-form-78').submit();
		});
	
		$('a.submit-inquiry-button').on('click', function(e) {
			e.preventDefault();
                        e.stopPropagation();
                        window.scrollTo(0,0);
			step_1.show();
			step_2.hide();
			var parent = $(this).parent();
			if(parent.hasClass('field-item')) {
				var link = parent.find('a').eq(1).attr('href');
			} else {
				var link = parent.attr('about');
			}

			$('input#edit-submitted-property').val(link);

			d.dialog('open');
		});
		}
	}
  }
})(jQuery);
