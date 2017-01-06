
$(document).ready(function(){
	$('.nav-url').click(function(){
		 var href = $(this).attr('data-href');
		 $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
	});
});