$(document).ready(function() {



  ! function(i) {
    var o, n;
    i(".n-accordion__title-block").on("click", function() {
      o = i(this).parents(".n-accordion__item"), n = o.find(".n-accordion__info"),
        o.hasClass("active_block") ? (o.removeClass("active_block"),
          n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
          o.siblings(".active_block").removeClass("active_block").children(".n-accordion__info").stop(!0, !0).slideUp())
    })
  }(jQuery);

  ! function(i) {
    var o, n;
    i(".n-accordion-inner__title-block").on("click", function() {
      o = i(this).parents(".n-accordion-inner__item"), n = o.find(".n-accordion-inner__info"),
        o.hasClass("active_block") ? (o.removeClass("active_block"),
          n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
          o.siblings(".active_block").removeClass("active_block").children(".n-accordion-inner__info").stop(!0, !0).slideUp())
    })
  }(jQuery);



  /// sort

  $(".n-sort__item").on('click', function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

  });

  /// catalog menu

  $(".n-header-bottom__cat").on('click', function () {
    $(".n-header-bottom__drop-menu").toggleClass("active");
  });

  $(".n-header__drop-menu-head-close").on('click', function () {
    $(".n-header-bottom__cat").removeClass("active");
  });

  /// paginator

  $(".n-pagin__item").on('click', function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

  });


  $('.aside-select__input').styler();


  /// more


  // var size = 55,
  //   newsContent= $('.n-cat__card-desc'),
  //   newsText = newsContent.text();

  // if(newsText.length > size){
  //   newsContent.text(newsText.slice(0, size) + ' ...');
  // }


  /// range

  $(".aside-select__cost-range").ionRangeSlider();


  $(function () {

    $("#range").ionRangeSlider({
      // hide_min_max: true,
      keyboard: true,
      min: 0,
      max: 5000,
      from: 1000,
      to: 4000,
      type: 'double',
      step: 1,
      grid: false
    });

  });


});
