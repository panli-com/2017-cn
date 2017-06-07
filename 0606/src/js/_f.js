function floorNnav() {
  var winW = $(window).width(),
    mainOfL = $(".sp-main").offset().left;
  mainW = $(".sp-main").width()
  var navW = $('.floor-nav').width();
  if (winW >= 1644) {
    var oFright = mainOfL + mainW + 15;

    $('.floor-nav').css("left", oFright)
  } else {
    $('.floor-nav').css({
      right: "10px",
    });
  }
}

function floorNnavLeft() {
  var winW = $(window).width(),
    mainOfL = $(".sp-main").offset().left;
  var navW = $('.floor-nav').width();
  if (winW >= 1444) {
    var oFright = mainOfL - navW - 15;
    $('.floor-nav').css("left", oFright)
  } else {
    $('.floor-nav').css({
      "left": '10px',
    });
  }
}

function goTofloorC(num) {

  var _afloTop = $("#floor-" + num).offset().top;
  $('body,html').animate({
    scrollTop: _afloTop - 14
  }, 300);
}