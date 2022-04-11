/* Scroll button */
$(function () {
  var pagetop = $(".scroll_btn");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
});
