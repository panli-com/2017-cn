;
(function() {

  $(function() {

    $(".r_l_nav").remove()


    $(".back-top").on("click", function() {
      $('body,html').animate({ scrollTop: 0 }, 300);
    });

    $("#sp-close-tip").on("click", function() {
     $(".floor-nav").remove()

    })

    floorNnav();
    // listData()

  });



  $(window).resize(function() {
    floorNnav();
  })

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var scrollTop2 = scrollTop;
    var footerTop = $(".footer").offset().top - 700;

    if (scrollTop > 400 && scrollTop2 < footerTop) {
      $('.floor-nav').show()
    } else {
      $('.floor-nav').hide()
    }
  });

})();