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
    $(".n-header-bottom__drop-menu.cat").toggleClass("active");
  });

  $(".n-header__drop-menu-head-close").on('click', function () {
    $(".n-header-bottom__cat").removeClass("active");
  });


  $(".n-header-top__city").on('click', function () {
    $(".n-header-bottom__drop-menu.city").toggleClass("active");
  });


  $(".n-header__drop-menu-head-close.city").on('click', function () {
    $(".n-header-bottom__cat").removeClass("active");
  });



  /// paginator

  $(".n-pagin__item").on('click', function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

  });


  $('.aside-select__input').styler();



  /// range

  $(".aside-select__cost-range").ionRangeSlider();



  $(".range1").ionRangeSlider({
    type: "double",
    min: 0,
    max: 100000,
    from: 0,
    to: 100000,
    step: 10
  });




 /// search

  $(".button-search, .button-search__text ").on('click',function () {
    $(".n-search__form").addClass('active');
  });



/// curtail

  $('.n-cat__card-title p').collapser({
    mode: 'chars',
    truncate: 50
  });
  $('.n-cat__card-desc p').collapser({
    mode: 'chars',
    truncate: 55
  });






});
