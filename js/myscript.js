(function($){
// 마우스 휠 가로로

// 왼쪽 메뉴를 클릭하면 css에 있는 .on 스타일이 적용도록

    $('#menu li').on('click', function(){
        // $(this).addClass('on').siblings().removeClass('on')
        // li를 클릭하면 해당 섹션으로 부드럽게 이동
        var num = $(this).index()
        $('html').stop().animate({
            scrollLeft:ww*num
        }, 300)
    })
    
    var ww = $(window).width()
    $(window).on('resize', function(){
        ww = $(this).width()
        $('html').scrollLeft(0)
        $('#menu li').eq(0).addClass('on').siblings().removeClass('on')
    })
    

// 새로고침했을때 원래 첫페이지 사진으로 돌아오게 하는것 두가지 방식
// 1.
// if($('html').scrollLeft() != 0) {
//     $('html').animate({scrollLeft: 0})
// }
// 2.
// $(window).on('load', function(){
//     $('html').animate({scrollLeft: 0})
// })
// 3.
    $(window).on('unload', function(){
        $('html').scrollLeft(0)
    })
    
    
    $('#wrap section').on('mousewheel', function(e, delta){
            var index = $(this).index()
    
            if (delta>0 && index>0) {                    // 마우스휠을 위로 굴린 상황
                $('html').stop().animate({
                    scrollLeft : ww*(index-1)
                }, 300)
                // $('#menu li').eq(index-1).addClass('on').siblings().removeClass('on')            // 휠하면 li색 바뀌도록
            } else if (delta<0 && index<$('#wrap section').length-1) {                         // 마우스휠을 아래로 굴린 상황
                $('html').stop().animate({
                    scrollLeft : ww*(index+1)
                }, 300)
                // $('#menu li').eq(index+1).addClass('on').siblings().removeClass('on')           // 휠하면 li색 바뀌도록
            } 
    })    
    
    
    $(window).on('scroll', function(){
        var scl = $(this).scrollLeft() + ww/2
        if (scl < ww) {
            $('#menu li').eq(0).addClass('on').siblings().removeClass('on')
        } else if (scl >= ww && scl < ww * 2) {
            $('#menu li').eq(1).addClass('on').siblings().removeClass('on')
        } else if (scl >= ww * 2 && scl < ww * 3) {   
            $('#menu li').eq(2).addClass('on').siblings().removeClass('on')
        } else {  
            $('#menu li').eq(3).addClass('on').siblings().removeClass('on')}
    })
    








    
    })(jQuery)