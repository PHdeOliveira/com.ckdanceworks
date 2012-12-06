// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

//Responsive menu
(function($){
$.fn.mobileMenu = function(options) {
	
	var defaults = {
			defaultText: 'Navigate to...',
			className: 'select-menu',
			subMenuClass: 'sub-menu',
			subMenuDash: '&ndash;'
		},
		settings = $.extend( defaults, options ),
		el = $(this);
	
	this.each(function(){
		// ad class to submenu list
		el.find('ul').addClass(settings.subMenuClass);

		// Create base menu
		$('<select />',{
			'class' : settings.className
		}).insertAfter( el );

		// Create default option
		$('<option />', {
			"value"		: '#',
			"text"		: settings.defaultText
		}).appendTo( '.' + settings.className );

		// Create select option from menu
		el.find('a').each(function(){
			var $this 	= $(this),
					optText	= '&nbsp;' + $this.text(),
					optSub	= $this.parents( '.' + settings.subMenuClass ),
					len			= optSub.length,
					dash;
			
			// if menu has sub menu
			if( $this.parents('ul').hasClass( settings.subMenuClass ) ) {
				dash = Array( len+1 ).join( settings.subMenuDash );
				optText = dash + optText;
			}

			// Now build menu and append it
			$('<option />', {
				"value"	: this.href,
				"html"	: optText,
				"selected" : (this.href == window.location.href)
			}).appendTo( '.' + settings.className );

		}); // End el.find('a').each

		// Change event on select element
		$('.' + settings.className).change(function(){
			var locations = $(this).val();
			if( locations !== '#' ) {
				window.location.href = $(this).val();
			};
		});

	}); // End this.each

	return this;

};
})(jQuery);

//Easing
jQuery.easing={easein:function(x,t,b,c,d){return c*(t/=d)*t+b},easeinout:function(x,t,b,c,d){if(t<d/2)return 2*c*t*t/(d*d)+b;var a=t-d/2;return-2*c*a*a/(d*d)+2*c*a/d+c/2+b},easeout:function(x,t,b,c,d){return-c*t*t/(d*d)+2*c*t/d+b},expoin:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(Math.exp(Math.log(c)/d*t))+b},expoout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(-Math.exp(-Math.log(c)/d*(t-d))+c+1)+b},expoinout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}if(t<d/2)return a*(Math.exp(Math.log(c/2)/(d/2)*t))+b;return a*(-Math.exp(-2*Math.log(c/2)/d*(t-d))+c+1)+b},bouncein:function(x,t,b,c,d){return c-jQuery.easing['bounceout'](x,d-t,0,c,d)+b},bounceout:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},bounceinout:function(x,t,b,c,d){if(t<d/2)return jQuery.easing['bouncein'](x,t*2,0,c,d)*.5+b;return jQuery.easing['bounceout'](x,t*2-d,0,c,d)*.5+c*.5+b},elasin:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},elasout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},elasinout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},backin:function(x,t,b,c,d){var s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},backout:function(x,t,b,c,d){var s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},backinout:function(x,t,b,c,d){var s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},linear:function(x,t,b,c,d){return c*t/d+b}};

//LavaLamp
(function($) {
    $.fn.lavaLamp = function(o) {
        o = $.extend({ fx: "linear", speed: 500, click: function(){} }, o || {});

        return this.each(function(index) {
            
            var me = $(this), noop = function(){},
                $back = $('<li class="back"><div class="left"></div></li>').appendTo(me),
                $li = $(">li", this), curr = $("li.current", this)[0] || $($li[0]).addClass("current")[0];

            $li.not(".back").hover(function() {
                move(this);
            }, noop);

            $(this).hover(noop, function() {
                move(curr);
            });

            $li.click(function(e) {
                setCurr(this);
                return o.click.apply(this, [e, this]);
            });

            setCurr(curr);

            function setCurr(el) {
                $back.css({ "left": el.offsetLeft+"px", "width": el.offsetWidth+"px" });
                curr = el;
            };
            
            function move(el) {
                $back.each(function() {
                    $.dequeue(this, "fx"); }
                ).animate({
                    width: el.offsetWidth,
                    left: el.offsetLeft
                }, o.speed, o.fx);
            };

            if (index == 0){
                $(window).resize(function(){
                    $back.css({
                        width: curr.offsetWidth,
                        left: curr.offsetLeft
                    });
                });
            }
            
        });
    };
})(jQuery);


//ease IN
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

//jquery placeholder
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));


//Coda Slider
// Utility for creating objects in older browsers
if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {}
		F.prototype = obj;
		return new F();
	};
}

(function( $, window, document, undefined ) {
	var Slider = {
		//initialize
		init: function( options, elem ) {
			var self = this;

			// Cache the element
			self.elem = elem;
			self.$elem = $( elem );

			// Cache the ID and class. This allows for multiple instances with any ID name supplied
			self.sliderId = '#' + ( self.$elem ).attr('id');
			
			// Set the options
			self.options = $.extend( {}, $.fn.codaSlider.options, options );
			
			// Cache the ID and class. This allows for multiple instances with any ID name supplied
			self.sliderId = '#' + ( self.$elem ).attr('id');

			// Variable for the % sign if needed (responsive), otherwise px
			self.pSign =  (self.options.responsive) ? '%' : 'px';
			
			// Build the tabs and navigation
			self.build();

			// Start auto slider
			if (self.options.autoSlide) {self.autoSlide();}

			self.events();

		},
		build: function() {
			var self = this;

			// Store current tab
			self.currentTab = self.options.firstPanelToLoad - 1;

			// Wrap the entire slider (backwards compatible)
			if ( $(self.sliderId).parent().attr('class') != 'coda-slider-wrapper' ) {$(self.sliderId).wrap('<div id="' + ( self.$elem ).attr('id') + '-wrapper" class="coda-slider-wrapper"></div>'); }
			
			// Add the .panel class to the individual panels (backwards compatable)
			self.panelClass = self.sliderId + ' .' + $(self.sliderId + " > div").addClass('panel').attr('class');

			// Wrap all panels in a div, and wrap inner content in a div (backwards ccompatible)
			$(self.panelClass).wrapAll('<div class="panel-container"></div>');
			if ( $(self.panelClass).children().attr('class') != 'panel-wrapper' ) { $(self.panelClass).wrapInner('<div class="panel-wrapper"></div>'); }
			self.panelContainer = ($(self.panelClass).parent());

			// If using fade transition, add the class here and disable other options.
			if (self.options.slideEaseFunction === "fade") {
				$(self.panelClass).addClass('fadeClass');
				self.options.continuous = false;
				$($(self.panelContainer).children()[self.currentTab]).css('display', 'block');
			}

			// Disable the autoheight for the first panel if responsive
			if (self.options.responsive) {
				// TODO allow for better floating when responsive
				if (self.options.dynamicArrows && !self.options.dynamicArrowsGraphical) {
					self.options.dynamicTabsAlign    = "center";
				}
				// This is needed to allow a smooth first panel height. It's later enabled.
				self.options.autoHeight = false;
			}

			// Apply starting height to the container
			if (self.options.autoHeight) { $(self.sliderId).css('height', $($(self.panelContainer).children()[self.currentTab]).height() + $(self.sliderId + '-wrapper .coda-nav-right').height() + self.pSign);	}

			// Build navigation tabs
			if (self.options.dynamicTabs) { self.addNavigation(); }

			// Build navigation arrows
			if (self.options.dynamicArrows) { self.addArrows(); }

			// Create a container width to allow for a smooth float right.
			self.totalSliderWidth = $(self.sliderId).outerWidth(true) + $($(self.sliderId).parent()).children('[class^=coda-nav-left]').outerWidth(true) + $($(self.sliderId).parent()).children('[class^=coda-nav-right]').outerWidth(true);
			$($(self.sliderId).parent()).css('width', self.totalSliderWidth);

			// Align navigation tabs
			if (self.options.dynamicTabs) { self.alignNavigation(); }

			// Clone panels if continuous is enabled
			if (self.options.continuous) {
				$(self.panelContainer).prepend($(self.panelContainer).children().last().clone());
				$(self.panelContainer).append($(self.panelContainer).children().eq(1).clone());
			}

			// Allow the slider to be clicked
			self.clickable = true;

			// Count the number of panels and get the combined width
			self.panelCount = (self.options.slideEaseFunction === 'fade') ? 1 : $(self.panelClass).length;
			self.panelWidth = $(self.panelClass).outerWidth(true);
			self.totalWidth = self.panelCount * self.panelWidth;
			

			// Create a variable for responsive setting
			if (self.options.responsive) { self.slideWidth = 100;}
			else { self.slideWidth = $(self.sliderId).width(); }

			// Puts the margin at the starting point with no animation. Made for both continuous and firstPanelToLoad features.
			// ~~(self.options.continuous) will equal 1 if true, otherwise 0
			if (self.options.slideEaseFunction != 'fade') { $(self.panelContainer).css('margin-left', ( -self.slideWidth * ~~(self.options.continuous)) + (-self.slideWidth * self.currentTab) + self.pSign ); }

			// Configure the current tab
			self.setCurrent(self.currentTab);

			// Apply the width to the panel container
			$(self.sliderId + ' .panel-container').css('width', self.totalWidth);

			// Make responsive (beta)
			if (self.options.responsive) {self.makeResponsive();}

		},

		addNavigation: function(){
			var self = this;
			var id =  ( self.$elem ).attr('id');
			// The id is assigned here to allow for responsive
			var dynamicTabs = '<div class="coda-nav"><ul id="' + ( self.$elem ).attr('id') + '-nav-ul"></ul></div>';
			//var dropDownList = '<select id="' + ( self.$elem ).attr('id') + '-nav-select" name="navigation"></select>';

			// Add basic frame
			if (self.options.dynamicTabsPosition === 'bottom') { $(self.sliderId).after(dynamicTabs); }
			else{ $(self.sliderId).before(dynamicTabs); }

			// Add responsive navigation
			//if (self.options.responsive) {$(self.sliderId + '-nav-ul').before(dropDownList);}

			// Add labels
			$.each(
				(self.$elem).find(self.options.panelTitleSelector), function(n) {
					$($(self.sliderId).parent()).find('.coda-nav ul').append('<li class="tab' + (n+1) + '"><a href="#' + (n+1) + '" title="' + $(this).text() + '">' + $(this).text() + '</a></li>');
				}
			);

			// TODO Add dropdown navigation for smaller screens if responsive
			if (self.options.responsive) {
				$.each(
					(self.$elem).find(self.options.panelTitleSelector), function(n) {
						$($(self.sliderId).parent()).find('.coda-nav select').append('<option value="tab' + (n+1) + '">' + $(this).text() + '</option>');
					}
				);
			}
		},

		alignNavigation: function() {
			var self = this;
			var arrow = (self.options.dynamicArrowsGraphical) ? '-arrow' : '';

			// Set the alignment, adjusting for margins
			if (self.options.dynamicTabsAlign != 'center') {
				$($(self.sliderId).parent()).find('.coda-nav ul').css(
					'margin-' + self.options.dynamicTabsAlign,
					// Finds the width of the aarows and the margin
						$($(self.sliderId).parent()).find(
							'.coda-nav-' +
							self.options.dynamicTabsAlign +
							arrow
						).outerWidth(true) + parseInt($(self.sliderId).css('margin-'+ self.options.dynamicTabsAlign), 10)
					);
				$($(self.sliderId).parent()).find('.coda-nav ul').css('float', self.options.dynamicTabsAlign); // couldn't combine this .css() with the previous??
			}
			self.totalNavWidth = $($(self.sliderId).parent()).find('.coda-nav ul').outerWidth(true);

			if (self.options.dynamicTabsAlign === 'center') {
				// Get total width of the navigation tabs and center it
				self.totalNavWidth = 0;
				$($(self.sliderId).parent()).find('.coda-nav li a').each(function(){self.totalNavWidth += $(this).outerWidth(true); });
				if ($.browser.msie) { self.totalNavWidth = self.totalNavWidth + (5);} // Simple IE fix
				$($(self.sliderId).parent()).find('.coda-nav ul').css('width', self.totalNavWidth + 1);
			}
		},

		addArrows: function(){
			var self = this;
			$(self.sliderId).parent().addClass("arrows");
			if(self.options.dynamicArrowsGraphical){
				$(self.sliderId).before('<div class="coda-nav-left-arrow" data-dir="prev" title="Slide left"><a href="#"></a></div>');
				$(self.sliderId).after('<div class="coda-nav-right-arrow" data-dir="next" title="Slide right"><a href="#"></a></div>');
			}
			else{
				$(self.sliderId).before('<div class="coda-nav-left" data-dir="prev" title="Slide left"><a href="#">' + self.options.dynamicArrowLeftText + '</a></div>');
				$(self.sliderId).after('<div class="coda-nav-right" data-dir="next" title="Slide right"><a href="#">' + self.options.dynamicArrowRightText + '</a></div>');
			}
		},

		makeResponsive: function(){
			var self = this;

			// Adjust widths and add classes to make responsive
			$(self.sliderId + '-wrapper').addClass('coda-responsive').css({
				'max-width': $(self.sliderId + ' .panel').outerWidth(true),
				'width': '100%'
			});
			$(self.sliderId + ' .panel-container').css('width', 100 * self.panelCount + self.pSign);
			$(self.sliderId + ' .panel').css('width', 100 / self.panelCount + self.pSign);
			$(self.sliderId).css('height', $($(self.panelContainer).children()[self.currentTab + ~~(self.options.continuous)]).css('height'));
			$(self.sliderId + '-nav-select').css('width', '100%');
			
			if (self.options.dynamicArrows || self.options.dynamicArrowsGraphical) {
				// Add padding to the top equal to the height of the arrows to make room for arrows, if enabled..
				$(self.sliderId).css('padding-top', $(self.sliderId + '-wrapper .coda-nav-right').css('height') );
			}

			// Enable autoslide again. (Need to eliminate the need for this)
			self.options.autoHeight = true;

			// Change navigation when the screen size is too small.
			if ( $(self.sliderId).width() < self.totalNavWidth ) {
				$(self.sliderId + '-nav-ul').css('display', 'none');
				$(self.sliderId + '-nav-select').css('display', 'block');
			}
			else { $(self.sliderId + '-nav-select').css('display', 'none'); }

			/**************************
			* Responsive Events
			**************************/

			// Change navigation if the user resizes the screen.
			$(window).bind('resize', function(){
				if ( $(self.sliderId).outerWidth() < self.totalNavWidth ) {
					$(self.sliderId + '-nav-ul').css('display', 'none');
					$(self.sliderId + '-nav-select').css('display', 'block');
				}
				else {
					$(self.sliderId + '-nav-ul').css('display', 'block');
					$(self.sliderId + '-nav-select').css('display', 'none');
				}
				// While resizing, set the width to 100%
				$(self.sliderId + '-wrapper').css('width', '100%');
				// Send to adjust the height
				self.transition();
			});

			// Do something when an item is selected from the select box
			$(self.sliderId + '-nav-select').change(function(){self.setCurrent(parseInt( $(this).val().split('tab')[1], 10) - 1 );});

			/*****************************
			* End Events
			******************************/


			// Match the slider margin with the width of the slider (better height transitions)
			$(self.sliderId + '-wrapper').css('width', $(self.sliderId).outerWidth(true));

		},

		events: function(){
			var self = this;
			// CLick arrows
			$($(self.sliderId).parent()).find('[class^=coda-nav-]').on('click', function(e){
				// These prevent clicking when in continuous mode, which would break it otherwise.
				if (!self.clickable && self.options.continuous) {return false;}
				self.setCurrent($(this).attr('class').split('-')[2]);
				if (self.options.continuous) {self.clickable = false;}
				return false;
			});
			// Click tabs
			$($(self.sliderId).parent()).find('[class^=coda-nav] li').on('click', function(e){
				if (!self.clickable && self.options.continuous) {return false;}
				self.setCurrent(parseInt( $(this).attr('class').split('tab')[1], 10) - 1 );
				if (self.options.continuous) {self.clickable = false;}
				return false;
			});
			// Click cross links
			$('[data-ref*=' + (self.sliderId).split('#')[1] + ']').on('click', function(e){
				if (!self.clickable && self.options.continuous) {return false;}
				// Stop and Play controls
				if (self.options.autoSlideControls) {
					if ($(this).attr('name') === 'stop') {
						$(this).html(self.options.autoSlideStartText).attr('name', 'start');
						clearTimeout(self.autoslideTimeout);
						return false;
					}
					if ($(this).attr('name') === 'start') {
						$(this).html(self.options.autoSlideStopText).attr('name', 'stop');
						self.setCurrent(self.currentTab + 1);
						self.autoSlide();
						return false;
					}
				}
				self.setCurrent( parseInt( $(this).attr('href').split('#')[1] -1, 10 ) );
				if (self.options.continuous) {self.clickable = false;}
				if (self.options.autoSlideStopWhenClicked) { clearTimeout(self.autoslideTimeout); }
				return false;
			});
			// Click to stop autoslider
			$($(self.sliderId).parent()).find('*').on('click', function(e){
				// AutoSlide controls.
				if (self.options.autoSlideControls && autoSlideStopWhenClicked) {
					$('body').find('[data-ref*=' + (self.sliderId).split('#')[1] + '][name=stop]').html(self.options.autoSlideStartText);
					clearTimeout(self.autoslideTimeout);
				}
				if (!self.clickable && self.options.continuous) {
					if (self.options.autoSlideStopWhenClicked) { clearTimeout(self.autoslideTimeout); }
					return false;
				}
				if (self.options.autoSlide) {
					// Clear the timeout
					if (self.options.autoSlideStopWhenClicked) { clearTimeout(self.autoslideTimeout); }
					else {
						self.autoSlide(clearTimeout(self.autoslideTimeout));
						self.clickable = true;
					}
				}
				// Stops from speedy clicking for continuous sliding.
				if (self.options.continuous) {clearTimeout(self.continuousTimeout);}
			});
		},

		setCurrent: function( direction ){
			var self = this;
			if (self.clickable) {
			
				if (typeof direction == 'number') {	self.currentTab = direction;}
				else {
					// "left" = -1; "right" = 1;
					self.currentTab += ( ~~( direction === 'right' ) || -1 );
					// If not continuous, slide back at the last or first panel
					if (!self.options.continuous){
						self.currentTab = (self.currentTab < 0) ? $(self.panelClass).length - 1 : (self.currentTab % $(self.panelClass).length);
					}
				}
				// This is so the height will match the current panel, ignoring the clones.
				// It also adjusts the count for the "currrent" class that's applied
				if (self.options.continuous) {
					self.panelHeightCount = self.currentTab + 1;
					if (self.currentTab === self.panelCount - 2){self.setTab = 0;}
					else if (self.currentTab === -1) {self.setTab = self.panelCount - 3;}
					else {self.setTab = self.currentTab;}
				}
				else{
					self.panelHeightCount = self.currentTab;
					self.setTab = self.currentTab;
				}
				// Add and remove current class.
				$($(self.sliderId).parent()).find('.tab' + (self.setTab + 1) + ' a:first')
				.addClass('current')
				.parent().siblings().children().removeClass('current');
				
				// Update the dropdown menu when small.
				if (self.options.responsive) { $(self.sliderId + '-nav-select').val('tab' + (self.currentTab + 1)); }
				this.transition();
			}
		},
		
		transition: function(){
			var self = this;
			// Adjust the height
			if (self.options.autoHeight) {
				$(self.panelContainer).parent().animate({
					'height': $($(self.panelContainer).children()[self.panelHeightCount]).css('height')
				}, {
					easing: self.options.autoHeightEaseFunction,
					duration: self.options.autoHeightEaseDuration,
					queue: false
				});
			}
			// Transition for fade option
			if (self.options.slideEaseFunction === 'fade') {
				$($(self.panelContainer).children()[self.currentTab])
					.fadeTo(self.options.slideEaseDuration, 1.0)
					.siblings().css('display', 'none');
			}
			else {
				// Adjust the margin for continuous sliding
				if (self.options.continuous) {self.marginLeft = -(self.currentTab * self.slideWidth ) - self.slideWidth;}
				// Otherwise adjust as normal
				else {self.marginLeft = -(self.currentTab * self.slideWidth ); }
				// Animate the slider
				(self.panelContainer).animate({
					'margin-left': self.marginLeft + self.pSign
				}, {
					easing: self.options.slideEaseFunction,
					duration: self.options.slideEaseDuration,
					queue: false,
					complete: self.continuousSlide(self.options.slideEaseDuration + 50) // Wonder about this "+50", so far so good...
				});
			}
			if (self.options.responsive){
				// Match the slider margin with the width of the slider (better height transitions)
				$(self.sliderId + '-wrapper').css('width', $(self.sliderId).outerWidth(true));
			}
		},

		autoSlide: function(){
			var self = this;
			// Can't set the autoslide slower than the easing ;-)
			if (self.options.autoSlideInterval < self.options.slideEaseDuration) {
				self.options.autoSlideInterval = (self.options.slideEaseDuration > self.options.autoHeightEaseDuration) ? self.options.slideEaseDuration : self.options.autoHeightEaseDuration;
			}
			if (self.options.continuous) {self.clickable = false;}
			self.autoslideTimeout = setTimeout(function() {
				// Slide left or right
				self.setCurrent( self.options.autoSliderDirection );
				self.autoSlide();

			}, self.options.autoSlideInterval);
		},

		continuousSlide: function (delay){
			var self = this;

			if (self.options.continuous) {
				self.continuousTimeout = setTimeout(function() {

					// If on the last panel (the clone of panel 1), set the margin to the original.
					if (self.currentTab === self.panelCount - 2){
						$(self.panelContainer).css('margin-left', -self.slideWidth + self.pSign);
						self.currentTab = 0;
					}
					// If on the first panel the clone of the last panel), set the margin to the original.
					else if (self.currentTab === -1){
						$(self.panelContainer).css('margin-left', -( ((self.slideWidth * self.panelCount) - (self.slideWidth * 2))) + self.pSign );
						self.currentTab = (self.panelCount - 3);
					}
					self.clickable = true;
				}, delay);
			}
			else{self.clickable = true;}
		}
	};
	
	$.fn.codaSlider = function( options ) {
		return this.each(function() {
			
			var slider = Object.create( Slider );
			slider.init( options, this );

		});
	};
	
	$.fn.codaSlider.options = {
		autoHeight: true,
		autoHeightEaseDuration: 700,
		autoHeightEaseFunction: "easeOutQuad",
		autoSlide: true,
		autoSliderDirection: 'right',
		autoSlideInterval: 5000,
		autoslideControls: true,
		autoSlideStartText: 'Start',
		autoSlideStopText: 'Stop',
		autoSlideStopWhenClicked: true,
		continuous: false,
		dynamicArrows: false,
		dynamicArrowsGraphical: false,
		dynamicArrowLeftText: "&#171; left",
		dynamicArrowRightText: "right &#187;",
		dynamicTabs: true,
		dynamicTabsAlign: "left",
		dynamicTabsPosition: "top",
		firstPanelToLoad: 1,
		panelTitleSelector: "h2.title",
		responsive:true,
		slideEaseDuration: 700,
		slideEaseFunction: "easeOutQuad"
	};

})( jQuery, window, document );


/*
Sequence.js (www.sequencejs.com)
Version: 0.6.7.1 Beta
Author: Ian Lunn @IanLunn
Author URL: http://www.ianlunn.co.uk/
Github: https://github.com/IanLunn/Sequence

This is a FREE script and is dual licensed under the following:
http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html

Sequence.js and its dependencies are (c) Ian Lunn Design 2012 unless otherwise stated.
Aside from these comments, you may modify and distribute this file as you please. Have fun!
*/(function(a){function b(b,c,d,e){function j(){function d(b){f.containerLeft=f.container.position().left;f.containerRight=f.containerLeft+f.container.width();f.containerTop=f.container.position().top;f.containerBottom=f.containerTop+f.container.height();var c=b.pageX,d=b.pageY;if(c>=f.containerLeft&&c<=f.containerRight&&d>=f.containerTop&&d<=f.containerBottom){f.settings.autoPlay=!1;clearTimeout(f.sequenceTimer);a(f.settings.pauseIcon).show();f.settings.pauseButton!==undefined&&f.settings.pauseButton.addClass("paused");f.settings.paused();f.sequence.unbind("mousemove")}}a(f.settings.preloader).remove();f.settings.nextButton=f.init.uiElements(f.settings.prependNextButton,f.settings.nextButton,".next",f.settings.nextButtonSrc,f.settings.nextButtonAlt);f.settings.prevButton=f.init.uiElements(f.settings.prependPrevButton,f.settings.prevButton,".prev",f.settings.prevButtonSrc,f.settings.prevButtonAlt);f.settings.pauseButton=f.init.uiElements(f.settings.prependPauseButton,f.settings.pauseButton,".pause",f.settings.pauseButtonSrc,f.settings.pauseButtonAlt);f.settings.nextButton!==undefined&&f.settings.nextButton!==!1&&f.settings.showNextButtonOnInit&&f.settings.nextButton.show();f.settings.prevButton!==undefined&&f.settings.prevButton!==!1&&f.settings.showPrevButtonOnInit&&f.settings.prevButton.show();f.settings.pauseButton!==undefined&&f.settings.pauseButton!==!1&&f.settings.pauseButton.show();if(f.settings.pauseIcon!==!1){f.settings.pauseIcon=f.init.uiElements(f.settings.prependPauseIcon,f.settings.pauseIcon,".pause-icon",f.settings.pauseIconSrc);f.settings.pauseIcon!==undefined&&f.settings.pauseIcon.hide()}f.hasTouch&&(f.settings.calculatedSwipeThreshold=f.container.width()*(f.settings.swipeThreshold/100));f.nextFrame=f.sequence.children("li:nth-child("+f.settings.startingFrameID+")");f.nextFrameChildren=f.nextFrame.children();f.nextFrameID=f.settings.startingFrameID;f.direction;f.sequence.css({width:"100%",height:"100%"});if(f.transitionsSupported)if(!f.settings.animateStartingFrameIn){f.currentFrame=f.nextFrame.addClass("current-frame");f.currentFrameChildren=f.currentFrame.children();f.currentFrameID=f.settings.startingFrameID;f.modifyElements(f.currentFrameChildren,"0s");f.currentFrameChildren.addClass("animate-in");setTimeout(function(){f.modifyElements(f.currentFrameChildren,"")},100);if(f.settings.autoPlay){var b=function(){f.autoPlaySequence()};clearTimeout(f.sequenceTimer);f.sequenceTimer=setTimeout(b,f.settings.autoPlayDelay,f)}}else if(f.settings.reverseAnimationsWhenNavigatingBackwards&&f.settings.autoPlayDirection-1&&f.settings.animateStartingFrameIn){f.modifyElements(f.nextFrameChildren,"0s");f.nextFrameChildren.addClass("animate-out");f.goTo(1,-1)}else f.goTo(1,1);else{f.container.addClass("sequence-fallback");f.currentFrame=f.nextFrame;f.currentFrame.addClass("current-frame");f.settings.beforeNextFrameAnimatesIn();f.settings.afterNextFrameAnimatesIn();f.currentFrameChildren=f.currentFrame.children();f.currentFrameID=f.settings.startingFrameID;f.sequence.children("li").children().css("opacity","0").addClass("animate-in").animate({opacity:"1"},500);f.nextFrame.css("z-index",f.numberOfFrames);f.sequence.children(":not(li:nth-child("+f.settings.startingFrameID+"))").css({display:"none",opacity:0});if(f.settings.autoPlay){var b=function(){f.autoPlaySequence()};clearTimeout(f.sequenceTimer);f.sequenceTimer=setTimeout(b,f.settings.autoPlayDelay,f)}}f.settings.nextButton!==undefined&&f.settings.nextButton.click(function(){f.next()});f.settings.prevButton!==undefined&&f.settings.prevButton.click(function(){f.prev()});f.settings.pauseButton!==undefined&&f.settings.pauseButton.click(function(){f.pause()});if(f.settings.keyNavigation){var c={left:37,right:39};a(document).keydown(function(a){function b(a,b){var d;for(keyCodes in b){keyCodes==="left"||keyCodes==="right"?d=c[keyCodes]:d=keyCodes;a===d&&f.initCustomKeyEvent(b[keyCodes])}}var d=parseFloat(String.fromCharCode(a.keyCode));if(d>0&&d<=f.numberOfFrames&&f.settings.numericKeysGoToFrames){f.nextFrameID=d;f.goTo(d)}b(a.keyCode,f.settings.keyEvents);b(a.keyCode,f.settings.customKeyEvents)})}if(f.settings.pauseOnHover&&!f.settings.pauseOnElementsOutsideContainer&&f.settings.autoPlay){f.hoverEvent=f.sequence.mousemove(function(a){d(a)});f.sequence.mouseleave(function(b){f.settings.autoPlay=!0;var c=function(){f.autoPlaySequence()};clearTimeout(f.sequenceTimer);f.sequenceTimer=setTimeout(c,f.settings.autoPlayDelay,f);a(f.settings.pauseIcon).hide();f.settings.pauseButton!==undefined&&f.settings.pauseButton.removeClass("paused");f.settings.unpaused();f.sequence.data("events").mousemove===undefined&&f.sequence.mousemove(function(a){d(a)})})}else f.settings.pauseOnHover&&f.settings.autoPlay&&(f.hoverEvent=f.sequence.hover(function(b){f.settings.autoPlay=!1;clearTimeout(f.sequenceTimer);a(f.settings.pauseIcon).show();f.settings.pauseButton!==undefined&&f.settings.pauseButton.addClass("paused");f.settings.paused()},function(){f.settings.autoPlay=!0;var b=function(){f.autoPlaySequence()};clearTimeout(f.sequenceTimer);f.sequenceTimer=setTimeout(b,f.settings.autoPlayDelay,f);a(f.settings.pauseIcon).hide();f.settings.pauseButton!==undefined&&f.settings.pauseButton.removeClass("paused");f.settings.unpaused()}));if(f.settings.swipeNavigation&&f.hasTouch){var e={touchstartX:-1,touchstartY:-1,touchmoveX:-1,touchmoveY:-1};f.sequence.on("touchstart touchmove touchend",function(a){f.settings.swipePreventsDefault&&a.preventDefault();switch(a.originalEvent.type){case"touchmove":case"touchstart":e[a.originalEvent.type+"X"]=a.originalEvent.touches[0].pageX;e[a.originalEvent.type+"Y"]=a.originalEvent.touches[0].pageY;break;case"touchend":if(e.touchmoveX!==-1){var b=e.touchmoveX-e.touchstartX,c=e.touchmoveY-e.touchstartY;Math.abs(b)>Math.abs(c)&&b>f.settings.calculatedSwipeThreshold?f.initCustomKeyEvent(f.settings.swipeEvents.right):Math.abs(b)>Math.abs(c)&&Math.abs(b)>f.settings.calculatedSwipeThreshold?f.initCustomKeyEvent(f.settings.swipeEvents.left):Math.abs(c)>Math.abs(b)&&c>f.settings.calculatedSwipeThreshold?f.initCustomKeyEvent(f.settings.swipeEvents.down):Math.abs(c)>Math.abs(b)&&Math.abs(c)>f.settings.calculatedSwipeThreshold&&f.initCustomKeyEvent(f.settings.swipeEvents.up);e={touchstartX:-1,touchstartY:-1,touchmoveX:-1,touchmoveY:-1}}break;default:}})}a(window).resize(function(){f.settings.calculatedSwipeThreshold=f.container.width()*(f.settings.swipeThreshold/100)})}var f=this;f.container=a(b),f.sequence=f.container.children("ul");try{Modernizr.prefixed;if(Modernizr.prefixed===undefined)throw"undefined"}catch(g){e.modernizr()}var h={WebkitTransition:"-webkit-",MozTransition:"-moz-",OTransition:"-o-",msTransition:"-ms-",transition:""},i={WebkitTransition:"webkitTransitionEnd webkitAnimationEnd",MozTransition:"transitionend animationend",OTransition:"oTransitionEnd oAnimationEnd otransitionend oanimationend",msTransition:"MSTransitionEnd MSAnimationEnd",transition:"transitionend animationend"};f.prefix=h[Modernizr.prefixed("transition")],f.transitionEnd=i[Modernizr.prefixed("transition")],f.transitionProperties={},f.numberOfFrames=f.sequence.children("li").length,f.transitionsSupported=f.prefix!==undefined?!0:!1,f.hasTouch="ontouchstart"in window?!0:!1,f.sequenceTimer,f.paused=!1,f.hoverEvent,f.defaultPreloader,f.init={preloader:function(b){f.prependTo=f.settings.prependPreloader==1?f.container:f.settings.prependPreloader;switch(b){case!0:case undefined:e.defaultPreloader(f.prependTo,f.transitionsSupported,f.prefix);(!f.transitionsSupported||f.prefix==="-o-")&&f.preloaderFallback();return a(".sequence-preloader");case!1:break;default:this.CSSSelectorToHTML(b);return a(b)}},uiElements:function(b,c,d,e,g){switch(c){case!1:return undefined;case!0:b===!0?f.container.prepend("<img "+this.CSSSelectorToHTML(d)+'src="'+e+'" alt="'+g+'" />'):b!==!1&&a(b).prepend("<img "+this.CSSSelectorToHTML(d)+'src="'+e+'" alt="'+g+'" />');return a(d);default:var h=b==1?f.container:b;a(h).prepend("<img "+this.CSSSelectorToHTML(c)+'src="'+e+'" alt="'+g+'" />');return a(c)}},CSSSelectorToHTML:function(a){switch(a.charAt(0)){case".":return'class="'+a.split(".")[1]+'"';case"#":return'id="'+a.split("#")[1]+'"';default:return a}}},f.settings=a.extend({},d,c),f.settings.preloader=f.init.preloader(f.settings.preloader);f.firstFrame=f.settings.animateStartingFrameIn?!0:!1;if(f.settings.animateStartingFrameIn){f.modifyElements(f.sequence.children("li").children(),"0s");f.sequence.children("li").children().removeClass("animate-in")}a(window).bind("load",function(){f.settings.afterLoaded();if(f.settings.preloader)if(f.settings.hidePreloaderUsingCSS&&f.transitionsSupported&&f.prefix!=="-o-"){f.prependPreloadingCompleteTo=f.settings.prependPreloadingComplete==1?f.settings.preloader:a(f.settings.prependPreloadingComplete);f.prependPreloadingCompleteTo.addClass("preloading-complete");setTimeout(j,f.settings.hidePreloaderDelay)}else f.settings.preloader.fadeOut(f.settings.hidePreloaderDelay,function(){clearInterval(f.defaultPreloader);j()});else j();a(this).unbind("load")})}b.prototype={preloaderFallback:function(){function d(){c=c===1?0:1;a(".sequence-preloader img:nth-child(1)").animate({opacity:c},100);a(".sequence-preloader img:nth-child(2)").animate({opacity:c},350);a(".sequence-preloader img:nth-child(3)").animate({opacity:c},600)}var b=this,c=0;d();b.defaultPreloader=setInterval(function(){d()},600)},initCustomKeyEvent:function(a){var b=this;switch(a){case"next":b.next();break;case"prev":b.prev();break;case"pause":b.pause()}},autoPlaySequence:function(a){var b=this;b.settings.autoPlayDirection===1?b.next():b.prev()},modifyElements:function(a,b){var c=this;a.css(c.prefixCSS(c.prefix,{"transition-duration":b,"transition-delay":b}))},prefixCSS:function(a,b){var c={};for(property in b)c[a+property]=b[property];return c},getStyleBySelector:function(a){var b={},c=document.styleSheets,d,e,f;for(e=c.length-1;e>=0;e--){var g=!1;try{d=c[e].cssRules}catch(h){g=!0}if(!g)for(f=0;f<d.length;f++)if(d[f].type===CSSRule.STYLE_RULE&&d[f].selectorText===a){b["-o-transition-duration"]=d[f].style.OTransitionDuration;b["-o-transition-delay"]=d[f].style.OTransitionDelay;return b}}return null},setTransitionProperties:function(b){var c=this;c.modifyElements(c.frameChildren,"");c.frameChildren.each(function(){if(c.prefix==="-o-"){var b="."+a(this).attr("class").replace(" ","."),d=c.getStyleBySelector(b);c.transitionProperties["transition-duration"]=d["-o-transition-duration"];c.transitionProperties["transition-delay"]=d["-o-transition-delay"];c.transitionProperties["transition-delay"]=c.transitionProperties["transition-delay"]===""?"0s":c.transitionProperties["transition-delay"]}else{c.transitionProperties["transition-duration"]=a(this).css(c.prefix+"transition-duration");c.transitionProperties["transition-delay"]=a(this).css(c.prefix+"transition-delay")}a(this).css(c.prefixCSS(c.prefix,c.transitionProperties))})},pause:function(){var a=this;if(a.settings.autoPlay){a.settings.pauseButton!==undefined&&a.settings.pauseButton.addClass("paused");a.settings.paused();a.stopAutoPlay()}else{a.settings.pauseButton!==undefined&&a.settings.pauseButton.removeClass("paused");a.settings.unpaused();a.startAutoPlay(a.settings.unpauseDelay)}},startAutoPlay:function(b,c){var d=this;b=b===undefined?0:b;d.settings.autoPlayDelay=c===undefined?d.settings.autoPlayDelay:c;d.settings.autoPlay=!0;var e=function(){d.autoPlaySequence()};clearTimeout(d.sequenceTimer);d.sequenceTimer=setTimeout(e,b,d);d.settings.pauseOnHover&&(d.hoverEvent=d.sequence.hover(function(){d.settings.autoPlay=!1;clearTimeout(d.sequenceTimer);a(d.settings.pauseIcon).show();d.settings.pauseButton!==undefined&&d.settings.pauseButton.addClass("paused");d.settings.paused()},function(){d.settings.autoPlay=!0;var b=function(){d.autoPlaySequence()};clearTimeout(d.sequenceTimer);d.sequenceTimer=setTimeout(b,d.settings.autoPlayDelay,d);a(d.settings.pauseIcon).hide();d.settings.pauseButton!==undefined&&d.settings.pauseButton.removeClass("paused");d.settings.unpaused()}))},stopAutoPlay:function(){var a=this;a.settings.autoPlay=!1;clearTimeout(a.sequenceTimer);a.hoverEvent!==undefined&&a.hoverEvent.unbind()},next:function(){var a=this;if(!a.active)if(a.settings.cycle||!a.settings.cycle&&a.currentFrameID!==a.numberOfFrames){if(a.paused){a.paused=!1;a.startAutoPlay()}a.nextFrameID=a.currentFrameID!==a.numberOfFrames?a.currentFrameID+1:1;a.goTo(a.nextFrameID,1)}else if(a.settings.autoPlayDirection===1){a.paused=!0;a.stopAutoPlay()}},prev:function(){var a=this;if(!a.active)if(a.settings.cycle||!a.settings.cycle&&a.currentFrameID!==1){if(a.paused){a.paused=!1;a.startAutoPlay()}a.nextFrameID=a.currentFrameID===1?a.numberOfFrames:a.currentFrameID-1;a.goTo(a.nextFrameID,-1)}else if(a.settings.autoPlayDirection===-1){a.paused=!0;a.stopAutoPlay()}},goTo:function(a,b){var c=this;a===c.numberOfFrames?c.settings.beforeLastFrameAnimatesIn():a===1&&c.settings.beforeFirstFrameAnimatesIn();if(c.currentFrame!==undefined&&a===c.currentFrame.index()+1)return!1;if(!c.active){c.active=!0;c.currentFrame=c.sequence.children(".current-frame");c.nextFrame=c.sequence.children("li:nth-child("+a+")");b===undefined?c.direction=a>c.currentFrameID?1:-1:c.direction=b;c.frameChildren=c.currentFrame.children();c.nextFrameChildren=c.nextFrame.children();if(c.transitionsSupported){if(c.currentFrame.length!==0){c.settings.beforeCurrentFrameAnimatesOut();c.animateOut(c.direction)}var d=function(){c.animateIn(c.direction);c.currentFrameID=a};if(!c.firstFrame)switch(c.settings.transitionThreshold){case!0:c.waitForAnimationsToComplete(c.currentFrame,c.frameChildren,"out");break;case!1:d();break;default:setTimeout(d,c.settings.transitionThreshold)}else{d();c.firstFrame=!1}}else{c.sequence.children("li").css({position:"relative"});c.settings.beforeCurrentFrameAnimatesOut();c.currentFrame.animate({opacity:0},c.settings.fallback.speed,function(){c.currentFrame.css({display:"none","z-index":"1"});c.currentFrame.removeClass("current-frame");c.settings.beforeNextFrameAnimatesIn();c.nextFrame.addClass("current-frame").css({display:"block","z-index":c.numberOfFrames}).animate({opacity:1},500,function(){c.settings.afterNextFrameAnimatesIn()});c.currentFrame=c.nextFrame;c.currentFrameID=c.currentFrame.index()+1;c.active=!1;if(c.settings.autoPlay){var a=function(){c.autoPlaySequence()};clearTimeout(c.sequenceTimer);c.sequenceTimer=setTimeout(a,c.settings.autoPlayDelay,c)}})}}},animateOut:function(a){var b=this;b.currentFrame.removeClass("current-frame");b.nextFrame.addClass("next-frame");if(!b.settings.reverseAnimationsWhenNavigatingBackwards||a===1){b.modifyElements(b.nextFrameChildren,"0s");b.nextFrameChildren.removeClass("animate-out");b.modifyElements(b.frameChildren,"");b.frameChildren.addClass("animate-out").removeClass("animate-in")}if(b.settings.reverseAnimationsWhenNavigatingBackwards&&a===-1){b.modifyElements(b.nextFrameChildren,"0s");b.nextFrameChildren.addClass("animate-out");b.setTransitionProperties(b.frameChildren);b.frameChildren.removeClass("animate-in")}b.settings.transitionThreshold&&b.waitForAnimationsToComplete(b.currentFrame,b.currentFrame.children(),"out",!0)},animateIn:function(a){var b=this;b.currentFrame.unbind(b.transitionEnd);b.currentFrame=b.nextFrame;a===1?b.currentFrameID=b.currentFrameID!==b.numberOfFrames?b.currentFrameID+1:1:b.currentFrameID=b.currentFrameID!==1?b.currentFrameID-1:b.numberOfFrames;b.nextFrameChildren=b.nextFrame.children();b.frameChildren=b.currentFrame.children();b.settings.beforeNextFrameAnimatesIn();!b.settings.reverseAnimationsWhenNavigatingBackwards||a===1?setTimeout(function(){b.modifyElements(b.frameChildren,"");b.frameChildren.addClass("animate-in");b.waitForAnimationsToComplete(b.nextFrame,b.nextFrameChildren,"in");b.settings.transitionThreshold!==!0&&b.settings.afterCurrentFrameAnimatesOut!="function () {}"&&b.waitForAnimationsToComplete(b.currentFrame,b.currentFrame.children(),"out")},50):b.settings.reverseAnimationsWhenNavigatingBackwards&&a===-1&&setTimeout(function(){b.setTransitionProperties(b.frameChildren);b.frameChildren.addClass("animate-in").removeClass("animate-out");b.waitForAnimationsToComplete(b.nextFrame,b.nextFrameChildren,"in");b.settings.transitionThreshold!==!0&&b.settings.afterCurrentFrameAnimatesOut!="function () {}"&&b.waitForAnimationsToComplete(b.currentFrame,b.currentFrame.children(),"out")},50)},waitForAnimationsToComplete:function(b,c,d,e){var f=this;if(d==="out")var g=function(){f.active=!1;b.unbind(f.transitionEnd);f.settings.afterCurrentFrameAnimatesOut();e&&f.animateIn(f.direction)};else if(d==="in")var g=function(){b.unbind(f.transitionEnd);f.settings.afterNextFrameAnimatesIn();f.currentFrameID===f.numberOfFrames?f.settings.afterLastFrameAnimatesIn():f.currentFrameID===1&&f.settings.afterFirstFrameAnimatesIn();f.nextFrame.removeClass("next-frame").addClass("current-frame");f.active=!1;if(f.settings.autoPlay){var a=function(){f.autoPlaySequence()};clearTimeout(f.sequenceTimer);f.sequenceTimer=setTimeout(a,f.settings.autoPlayDelay,f)}};c.each(function(){a(this).data("animationEnded",!1)});f.currentFrame.bind(f.transitionEnd,function(b){a(b.target).data("animationEnded",!0);var d=!0;c.each(function(){a(this).data("animationEnded")===!1&&(d=!1)});d&&g()})}};a.fn.sequence=function(e){return this.each(function(){var f=new b(a(this),e,d,c);a(this).data("sequence",f)})};var c={modernizr:function(){window.Modernizr=function(a,b,c){function d(a){p.cssText=a}function e(a,b){return d(prefixes.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a)if(p[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+t.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+u.join(d+" ")+d).split(" "),i(e,b,c))}var k="2.5.3",l={},m=b.documentElement,n="modernizr",o=b.createElement(n),p=o.style,q,r={}.toString,s="Webkit Moz O ms",t=s.split(" "),u=s.toLowerCase().split(" "),v={},w={},x={},y=[],z=y.slice,A,B={}.hasOwnProperty,C;!f(B,"undefined")&&!f(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(a){var b=self;if(typeof b!="function")throw new TypeError;var c=z.call(arguments,1),d=function(){if(self instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(z.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(z.call(arguments)))};return d});for(var D in v)C(v,D)&&(A=D.toLowerCase(),l[A]=v[D](),y.push((l[A]?"":"no-")+A));return d(""),o=q=null,l._version=k,l._domPrefixes=u,l._cssomPrefixes=t,l.testProp=function(a){return h([a])},l.testAllProps=j,l.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},l}(self,self.document)},defaultPreloader:function(b,c,d){var e=c?0:1;a("head").append("<style>.sequence-preloader{height: 100%;position: absolute;width: 100%;z-index: 999999;}@"+d+"keyframes preload{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 0;}}.sequence-preloader img{background: #68A1B1;border-radius: 6px;display: inline-block;height: 12px;opacity: "+e+";position: relative;top: -50%;width: 12px;"+d+"animation: preload 1s infinite; animation: preload 1s infinite;}.preloading{height: 12px;margin: 0 auto;top: 50%;position: relative;width: 48px;}.sequence-preloader img:nth-child(2){"+d+"animation-delay: .15s; animation-delay: .15s;}.sequence-preloader img:nth-child(3){"+d+"animation-delay: .3s; animation-delay: .3s;}.preloading-complete{opacity: 0;visibility: hidden;"+d+"transition-duration: 1s; transition-duration: 1s;}</style>");a(b).prepend('<div class="sequence-preloader"><div class="preloading"><img src="img/sequence-preloader.png" alt="" />    <img src="img/sequence-preloader.png" alt="Sequence is loading, please wait..." />    <img src="img/sequence-preloader.png" alt="" /></div></div>')}},d={startingFrameID:1,cycle:!0,animateStartingFrameIn:!1,transitionThreshold:1e3,reverseAnimationsWhenNavigatingBackwards:!0,autoPlay:!0,autoPlayDirection:1,autoPlayDelay:5e3,nextButton:!1,prependNextButton:!1,nextButtonSrc:"images/bt-next.png",nextButtonAlt:"&#gt;",showNextButtonOnInit:!0,prevButton:!1,prependPrevButton:!1,prevButtonSrc:"images/bt-prev.png",prevButtonAlt:"&#lt;",showPrevButtonOnInit:!0,pauseButton:!1,prependPauseButton:!1,pauseButtonSrc:"images/bt-pause.png",pauseButtonAlt:"&#166;&#166;",unpauseDelay:0,pauseOnHover:!0,pauseIcon:!1,prependPauseIcon:!1,pauseIconSrc:"images/pause-icon.png",pauseAlt:"Pause",pauseOnElementsOutsideContainer:!1,preloader:!0,prependPreloader:!0,prependPreloadingComplete:!0,hidePreloaderUsingCSS:!0,hidePreloaderDelay:0,keyNavigation:!0,numericKeysGoToFrames:!0,keyEvents:{left:"prev",right:"next"},customKeyEvents:{},swipeNavigation:!0,swipeThreshold:15,swipePreventsDefault:!1,swipeEvents:{left:"prev",right:"next",up:!1,down:!1},fallback:{theme:"fade",speed:500},paused:function(){},unpaused:function(){},beforeNextFrameAnimatesIn:function(){},afterNextFrameAnimatesIn:function(){},beforeCurrentFrameAnimatesOut:function(){},afterCurrentFrameAnimatesOut:function(){},beforeFirstFrameAnimatesIn:function(){},afterFirstFrameAnimatesIn:function(){},beforeLastFrameAnimatesIn:function(){},afterLastFrameAnimatesIn:function(){},afterLoaded:function(){}}})(jQuery);


//Ei-Slider

(function( window, $, undefined ) {
	
	/*
	* smartresize: debounced resize event for jQuery
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery.smartresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/

	var $event = $.event, resizeTimeout;

	$event.special.smartresize 	= {
		setup: function() {
			$(this).bind( "resize", $event.special.smartresize.handler );
		},
		teardown: function() {
			$(this).unbind( "resize", $event.special.smartresize.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args 	= arguments;

			// set correct event type
			event.type = "smartresize";

			if ( resizeTimeout ) { clearTimeout( resizeTimeout ); }
			resizeTimeout = setTimeout(function() {
				jQuery.event.handle.apply( context, args );
			}, execAsap === "execAsap"? 0 : 100 );
		}
	};

	$.fn.smartresize 			= function( fn ) {
		return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
	};
	
	$.Slideshow 				= function( options, element ) {
	
		this.$el			= $( element );
		
		/***** images ****/
		
		// list of image items
		this.$list			= this.$el.find('ul.ei-slider-large');
		// image items
		this.$imgItems		= this.$list.children('li');
		// total number of items
		this.itemsCount		= this.$imgItems.length;
		// images
		this.$images		= this.$imgItems.find('img:first');
		
		/***** thumbs ****/
		
		// thumbs wrapper
		this.$sliderthumbs	= this.$el.find('ul.ei-slider-thumbs').hide();
		// slider elements
		this.$sliderElems	= this.$sliderthumbs.children('li');
		// sliding div
		this.$sliderElem	= this.$sliderthumbs.children('li.ei-slider-element');
		// thumbs
		this.$thumbs		= this.$sliderElems.not('.ei-slider-element');
		
		// initialize slideshow
		this._init( options );
		
	};
	
	$.Slideshow.defaults 		= {
		// animation types:
		// "sides" : new slides will slide in from left / right
		// "center": new slides will appear in the center
		animation			: 'sides', // sides || center
		// if true the slider will automatically slide, and it will only stop if the user clicks on a thumb
		autoplay			: false,
		// interval for the slideshow
		slideshow_interval	: 3000,
		// speed for the sliding animation
		speed			: 800,
		// easing for the sliding animation
		easing			: '',
		// percentage of speed for the titles animation. Speed will be speed * titlesFactor
		titlesFactor		: 0.60,
		// titles animation speed
		titlespeed			: 800,
		// titles animation easing
		titleeasing			: '',
		// maximum width for the thumbs in pixels
		thumbMaxWidth		: 25
    };
	
	$.Slideshow.prototype 		= {
		_init 				: function( options ) {
			
			this.options 		= $.extend( true, {}, $.Slideshow.defaults, options );
			
			// set the opacity of the title elements and the image items
			this.$imgItems.css( 'opacity', 0 );
			this.$imgItems.find('div.ei-title > *').css( 'opacity', 0 );
			
			// index of current visible slider
			this.current		= 0;
			
			var _self			= this;
			
			// preload images
			// add loading status
			this.$loading		= $('<div class="ei-slider-loading">Loading</div>').prependTo( _self.$el );
			
			$.when( this._preloadImages() ).done( function() {
				
				// hide loading status
				_self.$loading.hide();
				
				// calculate size and position for each image
				_self._setImagesSize();
				
				// configure thumbs container
				_self._initThumbs();
				
				// show first
				_self.$imgItems.eq( _self.current ).css({
					'opacity' 	: 1,
					'z-index'	: 10
				}).show().find('div.ei-title > *').css( 'opacity', 1 );
				
				// if autoplay is true
				if( _self.options.autoplay ) {
				
					_self._startSlideshow();
				
				}
				
				// initialize the events
				_self._initEvents();
			
			});
			
		},
		_preloadImages		: function() {
			
			// preloads all the large images
			
			var _self	= this,
				loaded	= 0;
			
			return $.Deferred(
			
				function(dfd) {
			
					_self.$images.each( function( i ) {
						
						$('<img/>').load( function() {
						
							if( ++loaded === _self.itemsCount ) {
							
								dfd.resolve();
								
							}
						
						}).attr( 'src', $(this).attr('src') );
					
					});
					
				}
				
			).promise();
			
		},
		_setImagesSize		: function() {
			
			// save ei-slider's width
			this.elWidth	= this.$el.width();
			
			var _self	= this;
			
			this.$images.each( function( i ) {
				
				var $img	= $(this);
					imgDim	= _self._getImageDim( $img.attr('src') );
					
				$img.css({
					width		: imgDim.width,
					height		: imgDim.height,
					marginLeft	: imgDim.left,
					marginTop	: imgDim.top
				});
				
			});
		
		},
		_getImageDim		: function( src ) {
			
			var $img    = new Image();
							
			$img.src    = src;
					
			var c_w		= this.elWidth,
				c_h		= this.$el.height(),
				r_w		= c_h / c_w,
				
				i_w		= $img.width,
				i_h		= $img.height,
				r_i		= i_h / i_w,
				new_w, new_h, new_left, new_top;
					
			if( r_w > r_i ) {
				
				new_h	= c_h;
				new_w	= c_h / r_i;
			
			}
			else {
			
				new_h	= c_w * r_i;
				new_w	= c_w;
			
			}
					
			return {
				width	: new_w,
				height	: new_h,
				left	: ( c_w - new_w ),
				top		: ( c_h - new_h ) / 2
			};
		
		},
		_initThumbs			: function() {
		
			// set the max-width of the slider elements to the one set in the plugin's options
			// also, the width of each slider element will be 100% / total number of elements
			this.$sliderElems.css({
				'max-width' : this.options.thumbMaxWidth + 'px',
				'width'		: 100 / this.itemsCount + '%'
			});
			
			// set the max-width of the slider and show it
			this.$sliderthumbs.css( 'max-width', this.options.thumbMaxWidth * this.itemsCount + 'px' ).show();
			
		},
		_startSlideshow		: function() {
		
			var _self	= this;
			
			this.slideshow	= setTimeout( function() {
				
				var pos;
				
				( _self.current === _self.itemsCount - 1 ) ? pos = 0 : pos = _self.current + 1;
				
				_self._slideTo( pos );
				
				if( _self.options.autoplay ) {
				
					_self._startSlideshow();
				
				}
			
			}, this.options.slideshow_interval);
		
		},
		// shows the clicked thumb's slide
		_slideTo			: function( pos ) {
			
			// return if clicking the same element or if currently animating
			if( pos === this.current || this.isAnimating )
				return false;
			
			this.isAnimating	= true;
			
			var $currentSlide	= this.$imgItems.eq( this.current ),
				$nextSlide		= this.$imgItems.eq( pos ),
				_self			= this,
				
				preCSS			= {zIndex	: 10},
				animCSS			= {opacity	: 1};
			
			// new slide will slide in from left or right side
			if( this.options.animation === 'sides' ) {
				
				preCSS.left		= ( pos > this.current ) ? -1 * this.elWidth : this.elWidth;
				animCSS.left	= 0;
			
			}	
			
			// titles animation
			$nextSlide.find('div.ei-title > h2')
					  .css( 'margin-left', 50 + 'px' )
					  .stop()
					  .delay( this.options.speed * this.options.titlesFactor )
					  .animate({ marginLeft : 0 + 'px', opacity : 1 }, this.options.titlespeed, this.options.titleeasing )
					  .end()
					  .find('div.ei-title > p')
					  .css( 'margin-Left', -50 + 'px' )
					  .stop()
					  .delay( this.options.speed * this.options.titlesFactor )
					  .animate({ marginLeft : 0 + 'px', opacity : 1 }, this.options.titlespeed, this.options.titleeasing )
					  .end()
					  .find('div.ei-title > .emboss_button')
					  .css( 'margin-Left', 50 + 'px' )
					  .stop()
					  .delay( this.options.speed * this.options.titlesFactor )
					  .animate({ marginLeft : 0 + 'px', opacity : 1 }, this.options.titlespeed, this.options.titleeasing )
			
			$.when(
				
				// fade out current titles
				$currentSlide.css( 'z-index' , 1 ).find('div.ei-title > *').stop().fadeOut( this.options.speed / 2, function() {
					// reset style
					$(this).show().css( 'opacity', 0 );	
				}),
				
				// animate next slide in
				$nextSlide.css( preCSS ).stop().animate( animCSS, this.options.speed, this.options.easing ),
				
				// "sliding div" moves to new position
				this.$sliderElem.stop().animate({
					left	: this.$thumbs.eq( pos ).position().left
				}, this.options.speed )
				
			).done( function() {
				
				// reset values
				$currentSlide.css( 'opacity' , 0 ).find('div.ei-title > *').css( 'opacity', 0 );
					_self.current	= pos;
					_self.isAnimating		= false;
				
				});
				
		},
		_initEvents			: function() {
			
			var _self	= this;
			
			// window resize
			$(window).on( 'smartresize.eislideshow', function( event ) {
				
				// resize the images
				_self._setImagesSize();
			
				// reset position of thumbs sliding div
				_self.$sliderElem.css( 'left', _self.$thumbs.eq( _self.current ).position().left );
			
			});
			
			// click the thumbs
			this.$thumbs.on( 'click.eislideshow', function( event ) {
				
				if( _self.options.autoplay ) {
				
					clearTimeout( _self.slideshow );
					_self.options.autoplay	= false;
				
				}
				
				var $thumb	= $(this),
					idx		= $thumb.index() - 1; // exclude sliding div
					
				_self._slideTo( idx );
				
				return false;
			
			});
			
		}
	};
	
	var logError 				= function( message ) {
		
		if ( this.console ) {
			
			console.error( message );
			
		}
		
	};
	
	$.fn.eislideshow			= function( options ) {
	
		if ( typeof options === 'string' ) {
		
			var args = Array.prototype.slice.call( arguments, 1 );

			this.each(function() {
			
				var instance = $.data( this, 'eislideshow' );
				
				if ( !instance ) {
					logError( "cannot call methods on eislideshow prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for eislideshow instance" );
					return;
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
			
				var instance = $.data( this, 'eislideshow' );
				if ( !instance ) {
					$.data( this, 'eislideshow', new $.Slideshow( options, this ) );
				}
			});
		
		}
		
		return this;
		
	};
	
})( window, jQuery );