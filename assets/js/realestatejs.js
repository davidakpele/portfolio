
		$(function(){ // document ready
		  if (!!$('.sticky').offset()) { // make sure ".sticky" element exists
		    var stickyTop = $('.sticky').offset().top; // returns number 
		    $(window).scroll(function(){ // scroll event
		      var windowTop = $(window).scrollTop(); // returns number 
		      if (stickyTop < windowTop){
		        $('.sticky').css({ position: 'fixed', top: 0 });
		      }
		      else {
		        $('.sticky').css('position','static');
		      }
		    });
		  }
		});
		
		$('a').click(function(){
                    $('html, body').animate({
                            scrollTop: $( $(this).attr('href') ).offset().top
                    }, 1500);
                    return false;
		});
                
                // Code goes here
                $(function(){
                  $('#showmore').on('hide.bs.collapse', function () {
                    $('#button').html('Show more <i class="fa fa-angle-down"></i> ');
                  })
                  $('#showmore').on('show.bs.collapse', function () {
                    $('#button').html('Show less <i class="fa fa-angle-up"></i>');
                  })
                })