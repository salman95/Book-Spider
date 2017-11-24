function dropdown() {
	document.getElementById("nav").classList.toggle("show");
}

window.onclick = function(event) {

	if(!event.target.matches('.menubtn')){
		var dropdowns = document.getElementByClassName("navItems");
		var i;
		for (i = 0; i<dropdowns.length; i++){
			var openMenu = dropdowns[i];
			if(openMenu.classList.contains('show')){
				openMenu.classList.remove('show');
			}
		}
	}
}

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
        delta = 700;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };


    setTimeout(function() {
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
    },15000);


   /* $(document).ready(function() {
    var timeToDisplay = 2000;
    var opacityChangeDelay = 50;
    var opacityChangeAmount = 0.05;

    var animate = $('#animate');
    var urls = [
       "blank.png",
       "load1.png",
       "load2.png",
       "load3.png",
       "welcomescreen.png",
       "oneSearch.png"
       
    ];

    var index = 0;

    var transition = function() {
        var url = urls[index];

        animate.css('background-image', 'url(' + url + ')');

        index = index + 1;
        if (index > urls.length - 1) {
            index = 0;
        }
    };

    var fadeIn = function(opacity) {
        opacity = opacity + opacityChangeAmount;
        
        animate.css('opacity', opacity);
        
        if (opacity >= 1) {
            animate.trigger('fadeIn-complete');
            return;
        }
        setTimeout(function() {
            fadeIn(opacity);
        }, opacityChangeDelay);
    };

    var fadeOut = function(opacity) {
        opacity = opacity - opacityChangeAmount;
        
        animate.css('opacity', opacity);
        
        if (opacity <= 0) {
            animate.trigger('fadeOut-complete');
            return;
        }
        setTimeout(function() {
            fadeOut(opacity);
        }, opacityChangeDelay);
    };

    animate.on('fadeOut-complete', function(event) {
        transition();
        fadeIn(0);
    });

    animate.on('display-complete', function(event) {
        fadeOut(1);
    });

    animate.on('fadeIn-complete', function(event) {
        setTimeout(function() {
            animate.trigger('display-complete');
        }, timeToDisplay);
    });

    transition();
    fadeIn(0);
});*/ 