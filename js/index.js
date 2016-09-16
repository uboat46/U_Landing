function scrll(x) 
 	{
	    $('html, body').animate({scrollTop: $("#"+x).offset().top}, 1000);
    }