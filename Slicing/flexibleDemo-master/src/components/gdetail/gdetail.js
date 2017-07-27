            

 var area =document.getElementById('scrollBox');
    var con1 = document.getElementById('con1');
    var con2 = document.getElementById('con2');
    con2.innerHTML=con1.innerHTML;
    function scrollUp(){
    if(area.scrollTop>=con1.offsetHeight){
        area.scrollTop=0;
    }else{
        area.scrollTop++;
    }
    }                
    var time = 50;
    setInterval(scrollUp,time);

function dTab(gul,gli,gdiv,backImg){
    this.gul = document.getElementById(gul);
}


    $(function () {
        var Imglength = $(".detail_img_in img").length;
        var Imgwidth = $(".detail_img_in li").width();
        $(".detail_img_in").width(Imgwidth * Imglength + Imglength * 7 + 1);
        var myScroll;
        if ($("#wrapper").length > 0) {
            myScroll = new IScroll('#wrapper', {
                eventPassthrough: true,
                scrollX: true,
                scrollY: true,
                preventDefault: false,
                hScrollbar: true,
                scrollbars: 'custom'
            });
        }
    });


    //tab切换 
function setTab(name,cursel,n){
    for(i=1;i