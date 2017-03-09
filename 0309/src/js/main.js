;(function() {

    $(function() {

        // $(".floor-nav").on("click","li" ,function() {
        //     var _t = $(this),
        //         _tf = _t.attr("floor");
        //         goTofloorC(_tf);
        // });



        // $(".back-top").on("click", function() {
        //     $('body,html').animate({ scrollTop: 0 }, 300);
        // });

        // floorNnav();
        // listData()

    });
    

    // $(window).resize(function() {
    //     floorNnav();
    // })


    // $(window).scroll(function() {
    //     var scrollTop = $(window).scrollTop();
    //     $('.floor-nav')[scrollTop > 400 ? 'show' : 'hide']();
    // });

     $(".sp-main").on("click",".click-a",function(){              
                 var _t = $(this),
                _src = _t.attr("data-src");
                _h = _t.attr("data-h");
                _w = _t.attr("data-w");
                console.log(_src);
           var html =  $(".layer-html-"+_src).html();
                PL.open({
                  type: 1,
                  title: false,
                  closeBtn: false,
                  area: [ _w + 'px', _h + 'px'],
                  shadeClose: true,
                  skin: 'layui-Pan-nobg', //没有背景色
                  content: html
              });
     });    
      
      
      $("body").on("click",".close-layer",function(){
        PL.closeAll();
      })

})();