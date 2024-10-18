var google_conversion_id = 979690771;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
$('.flexslider').flexslider({
    animation: "slide",
    controlNav: false
});

$('.carousel').carousel({
    interval: 3000
})
$(function () {
    $("#tabs").tabs({
        hide: {
            effect: "fade",
            duration: 500
        },
        show: {
            effect: "fade",
            duration: 500
        },
        collapsible: true,
        active: false,
    });
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        print("Geolocation is not supported in this browser.");
    }
}

function showPosition(position) {
    print('Latitude:' + position.coords.latitude + '\n' + 'Longtude:' + position.coords.longitude);
}
$(function () {
    var $elems = $('.animateblock');
    var winheight = $(window).height();
    var fullheight = $(document).height();
    $(window).scroll(function(){
        animate_elems();
    });
    function animate_elems() {
        wintop = $(window).scrollTop(); // calculate distance from top of window
        // loop through each item to check when it animates
        $elems.each(function(){
            $elm = $(this);
            if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item
            topcoords = $elm.offset().top; // element's distance from top of page in pixels
            if(wintop > (topcoords - (winheight*.85))) {
                // animate when top of the window is 3/4 above the element
                $elm.addClass('animated');
            }
        });
    } // end animate_elems()
    });
    //Whatsapp Chat function open
    (function () {
        var options = {
            whatsapp: "+2349019384496", // WhatsApp number
            call_to_action: "Chat with us", // Call to action
            position: "left", // Position may be 'right' or 'left'
        };
    var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();

//close whatsapp
//This function is for Testimony slider on about-us
    $(document).ready(function () {
        $("#testimonial-slider").owlCarousel({
            items: 2,
            itemsDesktop: [1000, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsMobile: [650, 1],
            pagination: true,
            navigation: false,
            slideSpeed: 1000,
            autoPlay: true
        });
    });
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) { delta /= 2; }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
        }
        setTimeout(function() {
            that.tick();
        }, delta);
    };
    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    }; 
     $(function () {
         $('.blue').hoverZoom({
             overlayColor: '#000',
             zoom: 0
         }); // Default
     });