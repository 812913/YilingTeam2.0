/**
 * Created by person on 2017/2/14.
 */
//header
$(function(){
    var $nav=$('nav');
    var $p='<p id="menutoggle"><span>工作小组</span><img src="img/menu.png" alt="menu"/></p>'
    var winWidth=$(window).width();
    if(winWidth<690){
        $('nav span a').css('display','none');
        $('nav ul').before($p);
        $('nav ul').append('<li><a href="index.html">首页</a></li>')
    }else{
        $p.remove();
    }
    $('nav ul').css('display','none');
    $('#menutoggle img').click(function(){
        $('nav ul').slideToggle(200);
    })

});

//图片轮播
$(function(){
    var winWidth=$(window).width();
    if(winWidth>1100){
        $('#imgslide ul li img').css('width','1250px');
    }else if(winWidth>950){
        $('#imgslide ul li img').css('width','1000px');
    }
    $(window).resize(function(){
        var winWidth=$(window).width();
        if(winWidth>1100){
            $('#imgslide ul li img').css('width','1250px');
        }else if(winWidth>950){
            $('#imgslide ul li img').css('width','1100px');
        }
    })
    var duration=3000;//每张图片持续显示时间
    var speed=1000;//图片切换的动画时间
    var width=$('#slideshow').width();//获取单张图片的宽度
    var curIndex=0;//设置当前图片的索引值
    var totalIndex=$('#slideshow>ul>li').length;//获取图片的总数
    var timer;//设置一个计时变量
    $('#slideshow>ul>li').each(function(index){
        $(this).css('left',index*width+"px");//设置图片轮播的横向排列
        $('#slideshow-nav').append('<span>'+(index+1)+'</span>');//在导航中添加相应节点
    });
    $('#slideshow-nav>span').each(function(index){
        $(this).attr('index',index);//存储每个节点的索引值
        $(this).click(function(){ //当每个节点被点击时
            curIndex=$(this).attr('index')-1;//刷新当前显示图片的索引值
            clearTimeout(timer);//清除计时，否则会出现多个计时器同时工作的bug
            move();//重现执行move（）函数以显示该图片
        });
    });
    $('#slideshow-nav > span').eq(0).addClass('active');//设置第一个原点为active
    var firstChild=$('#slideshow>ul>li').eq(0).clone();//将第一张图片复制一份
    $('#slideshow>ul').append(firstChild);//将该图片添加到列表最末
    firstChild.css('left',totalIndex*width+"px");//将复制的第一张图片显示在图片序列最右侧
    function move(){
        curIndex++;
        if(curIndex>totalIndex){
            curIndex=1;//表示当前应该播放第二张图片
            $('#slideshow>ul').css('left','0px');//将图片序列重置到原点
        }
        for(var i=0; i < totalIndex; i++){
            $('#slideshow-nav > span').eq(i).removeClass("active"); //清除所有导航节点的active类
        }
        if(curIndex === totalIndex){
            $('#slideshow-nav > span').eq(0).addClass("active"); //如果当前索引值等于图片总数，则说明当前正显示第一张图片的副本，因此应激活第一个导航节点
        }else{
            $('#slideshow-nav > span').eq(curIndex).addClass("active"); //在其余情况下，则为当前导航节点添加active类
        }
        $('#slideshow>ul').animate({left:width*curIndex*-1+'px'},speed);//为图片序列添加动画
        timer = setTimeout(move,duration+speed);//设置延迟一定时间后执行move函数，延迟时间为动画时长加上每张图片的持续显示时间
    }
    timer=setTimeout(move,duration);//设置延迟一段时间后执行move函数，延迟时间等于每张图片的持续显示时间
    $('#slideshow').css('height',$('img').height()+'px');//图片在小屏幕上宽度发生动态变化，这也将使图片的高度也相应的发生变化，应该及时对#slideshow的高度进行调整，一是图片导航正确显示
//将其高度和图片的高度设为一致
    $(window).resize(function(){
        width=$('#slideshow').width();
        $('#slideshow').css('height',$('img').height()+'px');
        $('#slideshow>ul>li').each(function(index){
            $(this).css('left',index*width+'px');
        });
        $('#slideshow>ul').stop().animate({left:width*curIndex*-1+'px'},0);//是相应的动画时间设置为0，使得页面宽度更改时图片直接完成动画调整
    });
});

//teammember
$(function(){
        var winWidth=$(window).width();
        if(winWidth<899){
            $('.col figure img').wrap('<div class="figimg"></div>');
            $('.col figure').before('<p style="margin-bottom: 30px;"></p>');
        }
});

//自动刷新页面,当窗口大小改变时，刷新页面
$(function(){
    $(window).resize(function(){
        window.location.reload();
    })
})

