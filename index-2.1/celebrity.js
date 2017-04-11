/**
 * Created by person on 2017/2/20.
 */
//jQuery实现等高布局
$(function(){

});
$(function(){
    var winWidth=$(window).width();
    if(winWidth>=600){
        $('.timeline-content figure').hover(function(){
            $(this).find('figcaption').show(200);

        },function(){
            $(this).find('figcaption').hide(100);

        })
    }
});

$(function(){
    $('#graduates figure').before('<p style="margin-bottom: 30px;"></p>');
});

$(function(){
   $('#teamnews ul li').prepend('<span class="icospan"></span>')
});
