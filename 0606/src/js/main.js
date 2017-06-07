;
(function() {

  $(function() {

    $(".r_l_nav").remove()

    $(".floor-nav").on("click", "li", function() {
      var _t = $(this),
        _tf = _t.attr("floor");
      goTofloorC(_tf);
    });



    $(".back-top").on("click", function() {
      $('body,html').animate({ scrollTop: 0 }, 300);
    });

    $("#sp-close-tip").on("click", function() {
      $(".sp-tip").hide()
      $(".sp-girl").hide()
      $(".floor-nav").addClass("floor-nav_2")
      var girlBox = $("#sp-girl-box")
      girlBox.removeClass("hide")
      $(".sp-girl_3").addClass("sp-girl-animation")
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