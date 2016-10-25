$(function() {
    console.log( "ready!" );
    
    var i = 0;
    var error = 0;
    $('.btn').click(function() {
        
        if(i===0){
            
            $('.panel').removeClass('block');
            $('.panel-1').addClass('block');
            $('.hearts').addClass('block');
            i++;
        }else{
            if($("#correct"+i).is(':checked')){
                $('.panel').removeClass('block');
                $('.panel-'+(i+1).toString()).addClass('block');
                i++;
            }else{
               // $('.content').addClass('animated shake');
                error++;
                $('.content').animateCss('shake');
                $('#heart'+error).animateCss('bounceOutUp');
                
                
                setTimeout(function(){
                   $('#heart'+error).addClass('none'); 
                    if(error===3){
                        location.reload();
                    }
                }, 800);
                
               
            }
        }
        
        
       
    });
    
    
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });
});