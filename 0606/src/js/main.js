;
(function() {

  $(function() {

    $(".r_l_nav").remove()


    $(".back-top").on("click", function() {
      $('body,html').animate({ scrollTop: 0 }, 300);
    });

    $("#sp-close-tip").on("click", function() {
      $(".sp-tip").hide()
      $(".sp-girl").hide()
      $(".floor-nav").addClass("floor-nav_2")
      var girlBox = $("#sp-girl-box")
      girlBox.removeClass("hide")

      var girl3 = (".sp-girl_3")
      girl3.addClass("sp-girl-animation")

      setTimeout(function() {
        girl3.removeClass("sp-girl-animation")
      }, 5000)

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