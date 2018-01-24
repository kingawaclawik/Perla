+ function ($) {
  'use strict';

  $(window).on('load', function () {

    $("#yes21").click(function (event) {
      event.preventDefault();
      localStorage.setItem('21old', true);
      $(".animation-cointeiner").addClass("animation-run2");
      $("body").removeClass("check21-open");
    });

    if (!localStorage.getItem('21old')) {
      $("body").addClass("check21-open");
      $(".animation-cointeiner").addClass("animation-run");
    } else {
      $(".animation-cointeiner").remove();
    }

    //    if (localStorage.getItem('21old')) {
    //      var page = window.location.pathname;
    //      if (page == '/' || (/index/i.test(page))) {
    //        $("body").addClass("check21-open");
    //        $(".animation-cointeiner").addClass("animation-run").delay(3500).queue(function () {
    //          $(this).addClass("animation-run2");
    //          $("body").removeClass("check21-open");
    //        });
    //      } else {
    //        $(".animation-cointeiner").remove();
    //      }
    //    } else {
    //      $("body").addClass("check21-open");
    //      $(".animation-cointeiner").addClass("animation-run");
    //    }

    $('#no21').click(function () {
      event.preventDefault();
      //$("#joke-hide").hide();
      //$("#joke").show();
      parent.history.back();
      return false;
    });

  })

}(jQuery);
