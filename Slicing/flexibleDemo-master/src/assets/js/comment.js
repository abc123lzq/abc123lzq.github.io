$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $("#rollingTop").fadeIn(400);//当滑动栏向下滑动时，按钮渐现的时间
        } else {
            $("#rollingTop").fadeOut(200);//当页面回到顶部第一屏时，按钮渐隐的时间
        }
    });
    $("#rollingTop").click(function () {
        $('html,body').animate({
            scrollTop: '0px'
        }, 200);//返回顶部所用的时间
    });
});
