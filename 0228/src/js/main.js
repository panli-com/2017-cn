;(function() {

    $(function() {

        $(".floor-nav").on("click","li" ,function() {
            var _t = $(this),
                _tf = _t.attr("floor");
                goTofloorC(_tf);
        });



        $(".back-top").on("click", function() {
            $('body,html').animate({ scrollTop: 0 }, 300);
        });

        floorNnav();
        // listData()

    });
    

    $(window).resize(function() {
        floorNnav();
    })


    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        $('.floor-nav')[scrollTop > 400 ? 'show' : 'hide']();
    });

})();