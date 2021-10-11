// portfolio artwork hover
$(document).ready(function () {
  $(".img2").hover(
    function () {
      $(this).css("transform", "scale(1.1)");
    },
    function () {
      $(this).css("transform", "none");
    }
  );
  $(".img2").hover(
    function () {
      $(this).css("z-index", "2");
    },
    function () {
      $(this).css("z-index", "none");
    }
  );
  $(".img2").hover(
    function () {
      $(this).css("transition", "0.3");
    },
    function () {
      $(this).css("transition", "none");
    }
  );
  $(".img2").hover(
    function () {
      $(this).css("border-radius", "20px");
    },
    function () {
      $(this).css("border-radius", "10px");
    }
  );

  // arrow function
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#toTopBtn").fadeIn();
    } else {
      $("#toTopBtn").fadeOut();
    }
  });
  $("#toTopBtn").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  // Image load
  $("#div3").hide().fadeIn(2000);
});
