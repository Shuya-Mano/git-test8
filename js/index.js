var $audio1 = $("#night").get(0);
var $audio2 = $("#evening").get(0);

$(function () {
  $(".fv__texts").addClass("wipe_in");

  $(".hamburger").click(function () {
    $(".nav").fadeToggle();
    $(this).toggleClass("show");
    $(".hamburger_btn").toggleClass("is_open");
    $(".nav__list").toggleClass("change_color_black_hamburger");
  });

  $('a[href^="#"]').click(function () {
    var speed = 800;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  $(".note__btn").click(function () {
    if ($(this).hasClass("open") == false) {
      $(this).attr("src", "./img/note__open.svg");
    } else {
      $(this).attr("src", "./img/note__close.svg");
    }
    $(this).toggleClass("open");

    $(".note__icon").fadeToggle("note__in");
  });

  $(".note__color1").click(function () {
    $audio1.pause();
    $audio1.currentTime = 0;
    $audio2.pause();
    $audio2.currentTime = 0;
    $(".body").removeClass("change_color_orange");
    $(".body").removeClass("change_color_blue");
    $(".profile").removeClass("bgc_orange bgc_blue");
    $(".contact__item,.contact__field").removeClass("placeholder_white");

    $(".fv__photo").fadeOut(500, function () {
      $(this).attr("src", "./img/fv.jpg").fadeIn(500);
    });
    $(".profile__photo").fadeOut(500, function () {
      $(this).attr("src", "./img/profile.jpg").fadeIn(500);
    });
    $(".thought__photo").fadeOut(500, function () {
      $(this).attr("src", "./img/thought.jpg").fadeIn(500);
    });
  });

  $(".note__color2").click(function () {
    $(".body").addClass("change_color_orange");
    $(".body").removeClass("change_color_blue");
    $(".profile").removeClass("bgc_blue");
    $(".profile").addClass("bgc_orange");

    $audio1.volume = 0.5;
    $audio2.pause();
    $audio2.currentTime = 0;
    $audio1.play();

    $(".contact__item,.contact__field").removeClass("placeholder_white");

    $(".fv__photo").fadeOut(500, function () {
      $(this).attr("src", "./img/fv_orange.jpg").fadeIn(500);
    });
    $(".profile__photo").fadeOut(500, function () {
      $(this).attr("src", "./img/profile_orange.jpeg").fadeIn(500);
    });
    $(".thought__photo").fadeOut(500, function () {
      $(this).attr("src", "./img/thought_orange.jpg").fadeIn(500);
    });

    $(".profile").css("background-color");
  });

  $(".note__color3").click(function () {
    $(".body").addClass("change_color_blue");
    $(".body").removeClass("change_color_orange");

    $audio2.volume = 0.5;
    $audio1.pause();
    $audio1.currentTime = 0;
    $audio2.play();

    $(".profile").removeClass("bgc_orange");
    $(".profile").addClass("bgc_blue");

    $(".contact__item,.contact__field").addClass("placeholder_white");

    $(".fv__photo").fadeOut(500, function () {
      $(this).attr("src", "./img/fv_blue.jpg").fadeIn(500);
    });
    $(".profile__photo").fadeOut(500, function () {
      $(this).attr("src", "./img/profile_blue.jpg").fadeIn(500);
    });
    $(".thought__photo").fadeOut(500, function () {
      $(this).attr("src", "./img/kari.jpg").fadeIn(500);
    });
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
      $("#back-to-top").addClass("in");
    } else {
      $("#back-to-top").removeClass("in");
    }

    if ($(window).scrollTop() > $(window).height()) {
      $(".header").addClass("__fix");
    } else {
      $(".header").removeClass("__fix");
    }

    if ($(window).scrollTop() > $(window).height() + 1200) {
      $(".skill_box").addClass("skill_box_in");
      $(".skill__design").addClass("skill__design_in");
    }
  });
  $("#back-to-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });
});
