/**
 * Created by person on 2017/1/17.
 */
//返回顶部
$(function () {
    var $top=$('#top');
    $(window).scroll(function(){
        var scrollTop=$('html').scrollTop();
        //使用html而不是body

        if(scrollTop>200){
            $top.addClass('show');
        }else{
            $top.removeClass('show');
        }
    });
    $top.click(function () {
        $('html,body').animate({
            scrollTop:0
        },300)
    });
});
// 小于800时，没有返回顶部
$(function(){
    var winWidth=$(window).width();
    if(winWidth<=800){
        $('#top').css('display','none');
    }
});

//导航栏
$(function(){
    var winWidth=$(window).width();
    if(winWidth>600){
        $('header nav ul li').hover(function(){
            $(this).find('a')
                .css({'borderBottom':'2px solid #000',
                    'color':'#138FB1'});
        },function(){
            $(this).find('a')
                .css({'borderBottom':'none',
                    'color':'#000'});
        });
    }
    //小于600时的导航栏
    var $nav=$('header nav');
    var $p='<p id="menutoggle"><span>关于我们</span><img src="img/menu.png" alt="menu"/></p>'
    var winWidth=$(window).width();
    if(winWidth<600){
        $('header nav ul li:last-child').css('display','none');
        $('header nav ul').before($p);
        $('header nav ul').append('<li><a href="index.html">首页</a></li>');
        $('header nav ul li').hover(function(){
            $(this).find('a')
                .css('color','#138FB1');
        },function(){
            $(this).find('a')
                .css('color','#aaaaaa');
        });
        $('header nav ul').css('display','none');
        $('#menutoggle img').click(function(){
            $('header nav ul').slideToggle(200);
        })
    }
    else{
        $('header nav p').hide(0);
    }


    //滚动监听
    var resumeTop=$('.teamResume').offset().top;
    var historyTop=$('.teamHistory').offset().top;
    var ruleTop=$('.teamRule').offset().top;
    var replyTop=$('.teamReply').offset().top;
    var playTop=$('.teamPlay').offset().top;
    var buffer1=300;
    $(window).scroll(function(){
        var winPos=$(window).scrollTop();
        $('nav ul li a').removeClass('scrolling');
        if(winPos>=(playTop-480)){
            $('nav ul li a[href="#teamPlay"]').addClass('scrolling');
        }else if(winPos>=(replyTop-buffer1)){
            $('nav ul li a[href="#teamReply"]').addClass('scrolling');
        }else if(winPos>=(ruleTop-buffer1)){
            $('nav ul li a[href="#teamRule"]').addClass('scrolling');
        }else if(winPos>=(historyTop-buffer1)) {
            $('nav ul li a[href="#teamHistory"]').addClass('scrolling');
        }else{
            $('nav ul li a[href="#teamResume"]').addClass('scrolling');
        }
    });
    //菜单栏点击事件
    $('a[href="#teamResume"]').click(function(e){
        $('html').animate({scrollTop:(0)+'px'},800);
    });
    $('a[href="#teamHistory"]').click(function(e){
        $('html').animate({scrollTop:(historyTop-100)+'px'},800);
    });
    $('a[href="#teamRule"]').click(function(e){
        $('html').animate({scrollTop:(ruleTop-100)+'px'},800);
    });
    $('a[href="#teamReply"]').click(function(e){
        $('html').animate({scrollTop:(replyTop-100)+'px'},800);
    });
    $('a[href="#teamPlay"]').click(function(e){
        $('html').animate({scrollTop:(playTop)+'px'},800);
    });

});
//#teamResume
$(function(){
    $('#teamResume h1,#teamResume p').addClass('show');
    var winWidth=$(window).width();
    if(winWidth>600){
        $('#teamResume p').before('<div id="bgblur"></div>')
    }

});

//teamHistory
$(function() {
    $('.tabContent>li:not("#tab-1")').css('display', 'none');
    $('.tabNav>li:first a').addClass('show');

    // $('.tabNav li:not(.tabNav li:first)').hover(function () {
    //     $(this).find('a').css('color', '#138FB1');
    // }, function () {
    //     $(this).find('a').css('color', '#000000');
    // });

});
//teamHistory nav点击事件
function nav_click(i, event) {
    event.preventDefault();
    $('.tabContent>li').css('display', 'none');
    $(".tabContent>li[id='tab-" + i + "']").css('display', 'table-row');
    $('.tabNav li a').removeClass('show');
    var j=i-1;
    $(".tabNav>li:eq("+j+") a").addClass('show');
}

//#teamReply
    $(function(){
        var windowHeight=$(window).height();
        var teamReply_y=$('#teamReply').offset().top;
        var buffer=600;
        $(window).scroll(function(){
            pos=$(window).scrollTop();
            if(pos>teamReply_y-buffer){
                $('.reply>div').addClass('scrolled');
                $('#teamReply>div').addClass('scrolled');
                $('.replyimg').css('borderRight','1px solid #ccc');

            }
            else{
                $('.reply>div').removeClass('scrolled');
                $('#teamReply>div').removeClass('scrolled');
            }
            // if(pos<teamReply_y-windowHeight+buffer){
            //     $('.reply>div').removeClass('scrolled');
            // }
        })
    });

//自动刷新页面,当窗口大小改变时，刷新页面
$(function(){
    $(window).resize(function(){
        window.location.reload();
    })
})



/**
 * Created by person on 2017/2/22.
 */

