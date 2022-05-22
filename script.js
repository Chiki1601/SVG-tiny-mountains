(function(){
	var s = Snap("#little-mountains"),
		cloud1 = Snap('#cloud1'),
		cloud3 = Snap('#cloud3'),
		star2 = Snap('#star2'),
		star1 = Snap('#star1'),
		star1 = Snap('#star1'),
		firstMoth = Snap('#firstMoth'),
		secondMoth = Snap('#secondMoth'),
		thirdMoth = Snap('#thirdMoth'),
		fourthMoth = Snap('#fourthmoth'),
		balloon = Snap('#balloon'),
		basket = Snap('#basket'),
		cloud2 = Snap('#cloud2');

	s.attr({ 
		height: '100%',
		width: '100%',
		viewBox: "0 0 550 400", 
		preserveAspectRatio : "true"
	});

	var cloudOne = function() { 
		cloud1.animate({'transform' : 'T10 T400'}, 120000, mina.linear);
		cloud2.animate({'transform' : 'T10 T-200'}, 120000, mina.linear);
		cloud3.animate({'transform' : 'T10 T-400'}, 120000, mina.linear);
	}
	cloudOne();
	
	var balloonMove = function() {
		balloon.animate({'transform' : 'T10 T100'}, 120000, mina.linear);		
		basket.animate({'transform' : 'T10 T100'}, 120000, mina.linear);
	}
	balloonMove();
	
	var starTwo = function() { 
		star1.animate({'transform' : 's1'}, 2000, mina.linear, starBack);
		star2.animate({'transform' : 's1.3'}, 2000, mina.linear, starBack);
		firstMoth.animate({opacity : 0.2}, 2000, mina.linear, starBack);
		secondMoth.animate({opacity : 0.5}, 2000, mina.linear, starBack);
		thirdMoth.animate({opacity : 0.7}, 2000, mina.linear, starBack);
		fourthMoth.animate({opacity : 0.4}, 2000, mina.linear, starBack);
	}
	var starBack = function() { 
		star1.animate({'transform' : 's1.6'}, 2000, mina.linear, starTwo);
		star2.animate({'transform' : 's1'}, 2000, mina.linear, starTwo);
		firstMoth.animate({opacity : 0.6}, 2000, mina.linear, starBack);
		secondMoth.animate({opacity : 0.3}, 2000, mina.linear, starBack);
		fourthMoth.animate({opacity : 0.7}, 2000, mina.linear, starTwo);
		thirdMoth.animate({opacity : 0.2}, 2000, mina.linear, starTwo);
	}
	starTwo();
	
// 	fourthMoth.stop().animate({ opacity: 0.2}, 200, mina.easeout, function() {
// 		star1.stop().animate({opacity: 0, transform: 't-20,34 s4'}, 2500, mina.easeout);
// 		star2.stop().animate({transform: 't60,-100'}, 5000, mina.easeout);
// 	});
		
})();