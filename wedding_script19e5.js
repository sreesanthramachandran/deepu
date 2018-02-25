(function($) {
	"use strict"; // Start of use strict


	/* Logo Lettering */
	var logo_rotate = $("header .wed_logo_animation").attr('data-rotate');
	if (logo_rotate!='') {
		$("header .wed_logo_animation").addClass('wed_logo_rotate_'+logo_rotate);
	}
	
	$("header .wed_logo_animation").lettering();
	$("header .wed_logo_animation span").each(function(){
	 	var min = 0;
	 	var max = 50;
	 	var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
	 	$(this).css('transition-delay', '0.'+randomNumber+'s');
	 });



	/*Firefly*/
	if ($('.jqueryFireFly').length>0) {
		$('.jqueryFireFly').each(function(){
			var total = $(this).attr('data-total');
			var minPixel = $(this).attr('data-minPixel');
			var maxPixel = $(this).attr('data-maxPixel');
			$.firefly({
			  minPixel: minPixel,
       	maxPixel: maxPixel,
				color: 'none',
				total : total,
				twinkle: 0.9,
				on:'.wed_firefly'
			});
		});
		
	};
	


	/*CountTo*/
	$('.wed_timer').appear(function() {
        var e = $(this);
        e.countTo({
            from: 0,
            to: e.html(),
            speed: 1300,
            refreshInterval: 60
        })
    })
    $('.date_picker').datepicker();

   /*Ajax Form*/
	 if($("form[data-fw-form-id]").length) {
	  fwForm.initAjaxSubmit({
	   selector: 'form[data-fw-form-id][data-fw-ext-forms-type="contact-forms"]',
	  });
	 }

    /*Gallery Lightbox*/
	$('.lightbox').magnificPopup({ 
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});
	$('.video').magnificPopup({
	  type: 'iframe',
	  iframe: {
		  markup: '<div class="mfp-iframe-scaler">'+
		            '<div class="mfp-close"></div>'+
		            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

		  patterns: {
		    youtube: {
		      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

		      id: 'v=', // String that splits URL in a two parts, second part should be %id%
		      // Or null - full URL will be returned
		      // Or a function that should return %id%, for example:
		      // id: function(url) { return 'parsed id'; } 

		      src: 'http://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
		    },
		    vimeo: {
		      index: 'vimeo.com/',
		      id: '/',
		      src: 'http://player.vimeo.com/video/%id%?autoplay=1'
		    },
		    gmaps: {
		      index: '//maps.google.',
		      src: '%id%&output=embed'
		    }

		    // you may add here more sources

		  },

		  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}  
	  
	});
	
	/*OWL Intro Slider*/
	$(".wed_slider_carousel").owlCarousel({
 		navigation : true, 
 		responsive: true, 
 		responsiveRefreshRate : 200, 
 		responsiveBaseElement:window, 
 		slideSpeed : 200, 
 		addClassActive:true,
		paginationSpeed : 200, 
		rewindSpeed : 200,
		items:1,
		autoPlay : false, 
		touchDrag:false,
		singleItem:true,
		transitionStyle: 'fade',
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

    /*OWL Team*/
	$(".wed_team_slider").owlCarousel({
 		navigation : true, 
 		responsive: true, 
 		responsiveRefreshRate : 600, 
 		responsiveBaseElement:window, 
 		slideSpeed : 1500, 
 		addClassActive:true,
		paginationSpeed : 700, 
		rewindSpeed : 3000,
		items:3,
		itemsTablet:[1000,2],
		itemsMobile : [569,1],
		itemsDesktop:3,
		autoPlay : true, 
		touchDrag:false, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});
    /*OWL Team*/
	$(".wed_services_slider").owlCarousel({
 		navigation : true, 
 		responsive: true, 
 		responsiveRefreshRate : 400, 
 		responsiveBaseElement:window, 
 		slideSpeed : 400, 
 		addClassActive:true,
		paginationSpeed : 900, 
		rewindSpeed : 400,
		transitionStyle : "goDown",
		items:1,
		autoPlay : true, 
		singleItem:true,
		autoHeight : true,
		touchDrag:false, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});
	/* OWL Team Single*/
	$(".wed_team_slider_single").owlCarousel({
 		navigation : true, 
 		responsive: true, 
 		responsiveRefreshRate : 200, 
 		responsiveBaseElement:window, 
 		slideSpeed : 200, 
 		addClassActive:true,
		paginationSpeed : 200, 
		rewindSpeed : 200,
		items:1,
		autoPlay : true, 
		singleItem:true,
		autoHeight : true,
		touchDrag:false, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});

	/*OWL Carousel in Shop Item*/
	
		$(".wed_shop_item_slider").owlCarousel({
	 		navigation : true, 
	 		responsive: true, 
	 		responsiveRefreshRate : 200, 
	 		responsiveBaseElement:window, 
	 		slideSpeed : 200, 
	 		addClassActive:true,
			paginationSpeed : 200, 
			rewindSpeed : 200, 
			singleItem:true, 
			autoPlay : false, 	
			touchDrag:false, 
			navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
		});

	/*OWL Slide Gallery*/
	
    /*OWL Slide Gallery*/
	$(".wed_slide_gallery").owlCarousel({
 		navigation : true, 
 		responsive: true, 
 		responsiveRefreshRate : 600, 
 		responsiveBaseElement:window, 
 		slideSpeed : 1500, 
 		addClassActive:true,
		paginationSpeed : 700, 
		rewindSpeed : 3000,
		items:3,
		itemsTablet:[1000,2],
		itemsMobile : [569,1],
		itemsDesktop:3,
		autoPlay : true, 
		touchDrag:false, 
		navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>']
	});



	
	/* Section Background */
	$('.wed_image_bck').each(function(){
		var image = $(this).attr('data-image');
		var gradient = $(this).attr('data-gradient');
		var color = $(this).attr('data-color');
		var border = $(this).attr('data-border');
		var blend = $(this).attr('data-blend');
		var opacity = $(this).attr('data-opacity');
		var position = $(this).attr('data-position');
		var height = $(this).attr('data-height');
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
		if (gradient){
			$(this).css('background-image', gradient);	
		}
		if (color){
			$(this).css('background-color', color);	
		}
		if (border){
			$(this).css('border-color', border);	
		}
		if (blend){
			$(this).css('background-blend-mode', blend);	
		}
		if (position){
			$(this).css('background-position', position);	
		}
		if (opacity){
			$(this).css('opacity', opacity);	
		}
		if (height){
			$(this).css('height', height);	
		}

	});


	/* Over */
	$('.wed_over, .wed_head_bck').each(function(){
		var color = $(this).attr('data-color');
		var image = $(this).attr('data-image');
		var opacity = $(this).attr('data-opacity');
		var blend = $(this).attr('data-blend');
		if (color){
			$(this).css('background-color', color);	
		}
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
		if (opacity){
			$(this).css('opacity', opacity);	
		}
		if (blend){
			$(this).css('mix-blend-mode', blend);	
		}
	});

	/* Map */
	$('.wed_map_over').on("click", function(e){
		$(this).parents('.wed_map_wrapper').toggleClass('active_map');
	});

	/* Mobile Menu */

	$('.wed_top_menu_cont .page_item_has_children > a, .wed_top_menu_cont .menu-item-has-children > a').on("click", function(e){
		$(this).next('ul.children, ul.sub-menu').slideToggle(300);
		e.preventDefault();
	});

	$('.wed_top_menu_mobile_link').on("click", function(e){
		$(this).next('.wed_top_menu_cont').fadeToggle();
		$(this).parents('.wed_light_nav').toggleClass('active');
	});
	// Open Close Music
    $('.wed_music_content').on('click',function(e){
        e.preventDefault();
        $(this).next('.wed_iframe').toggleClass('active');
    });


	/*Scroll Effect*/

	$('.wed_go').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 2300);
		e.preventDefault();
	});



	/*Animation Block Delay*/
	
	$('div[data-animation=animation_blocks]').each(function(){
	var i = 0;	
		$(this).find('.wed_icon_box, .skill-bar-content, .wed_anim_box, .wed_bd, .wed_story_txt, .wed_portfolio_item_cont').each(function(){
			$(this).css('transition-delay','0.'+i+'s');
			i++;
		})
	})

	/*Increase-Decrease*/
    $('.increase-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('.qty').val();
    	var qtyb = qtya * 1 + 1;
    	$(this).parents('.add-to-cart').find('.qty').val(qtyb);
		e.preventDefault();
	});
	$('.decrease-qty').on("click", function(e){
    	var qtya = $(this).parents('.add-to-cart').find('.qty').val();
    	var qtyb = qtya * 1 - 1;
    	if (qtyb < 1) {
            qtyb = 1;
        }
    	$(this).parents('.add-to-cart').find('.qty').val(qtyb);
		e.preventDefault();
	});


	
	

	/* Bootstrap */
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	/* Anchor Scroll */
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$(".wed_logo").addClass('active');
			$('body').addClass('wed_first_step');
			
		}
		else {
			$('body').removeClass('wed_first_step');
			$(".wed_logo").removeClass('active');
		}
		if ($(window).scrollTop() > 500) {
			$('body').addClass('wed_second_step');
		}
		else {
			$('body').removeClass('wed_second_step');
		}
		if ($(window).scrollTop() > 800) {
			$('body').addClass('wed_third_step');
		}
		else {
			$('body').removeClass('wed_third_step');
		}
	});

	/* Fixed for Parallax */
	$(".wed_fixed").css("background-attachment","fixed");



 	



	/* Block Autheight */
	if( !device.tablet() && !device.mobile() ) {
		$('.wed_auto_height').each(function(){
			setEqualHeight($(this).find('div[class^="col"], div[class^="fw-col"]'));
		});
	}
	if( device.tablet() && device.landscape() ) {
		$('.wed_auto_height').each(function(){
			setEqualHeight($(this).find('div[class^="col"], div[class^="fw-col"]'));
		});
	}

	$(window).resize(function() {
		if( !device.tablet() && !device.mobile() ) {
			$('.wed_auto_height').each(function(){
				setEqualHeight($(this).find('div[class^="col"], div[class^="fw-col"]'));
			});
		}
		if( device.tablet() && device.landscape() ) {
			$('.wed_auto_height').each(function(){
				setEqualHeight($(this).find('div[class^="col"], div[class^="fw-col"]'));
			});
		}
	});

	/*Boxes AutoHeight*/
	function setEqualHeight(columns)
	{
		var tallestcolumn = 0;
		columns.each(
			function()
			{
				$(this).css('height','auto');
				var currentHeight = $(this).height();
				if(currentHeight > tallestcolumn)
					{
					tallestcolumn = currentHeight;
					}
			}
		);
	columns.height(tallestcolumn);
	}

	$(window).load(function(){

	// Page loader
        
    $("body").imagesLoaded(function(){
        $(".wed_page_loader div").fadeOut();
    	$(".wed_page_loader").delay(200).fadeOut("slow");
    });


	/*SkroolR*/
	if( !device.tablet() && !device.mobile() ) {
		var s = skrollr.init({
			forceHeight: false,
		});
		$(window).stellar({
		 	horizontalScrolling: false,
			responsive: true,
	 	});
	}

	/*Countdown*/
	$('.wed_countdown').each(function(){
		var year = $(this).attr('data-year');
		var month = $(this).attr('data-month');
		var day = $(this).attr('data-day');
		$(this).countdown({until: new Date(year,month-1,day)});

	});
 	/*Masonry*/

	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
	    columnWidth: '.grid-item'
	  }	  
	});
	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});
	$(window).resize(function(){
	  $grid.isotope('layout');
	});



	$('.masonry').masonry({
		itemSelector: '.masonry-item',
	});

	$('.filter-button-group').on( 'click', 'a', function() {
	  $(this).parents('.filter-button-group').find('a').removeClass('active');
	  $(this).addClass('active');
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	
	
});

	
})(jQuery);



