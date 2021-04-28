"use strict";

$(function () {
  new WOW({
    mobile: false
  }).init();
  $('.burger-btn').click(function () {
    if ($(".nav-menu").css('display') == 'block') {
      //   $(".nav-menu").hide(200);
      $(".nav-menu").hide("slide", {
        direction: "right"
      }, 150);
      $('.burger-btn').removeClass('active');
    } else {
      $('.nav-menu').show("slide", {
        direction: "right"
      }, 150);
      $('.burger-btn').addClass('active');
    }
  });
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".nav-menu"); // тут указываем ID элемента

    var button = $(".burger-btn");

    if (!div.is(e.target) && !button.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0) {
      // и не по его дочерним элементам
      //   div.hide(150);
      div.hide("slide", {
        direction: "right"
      }, 150);
      button.removeClass('active'); // скрываем его
    }
  }); //header slider

  $('#header-slider').owlCarousel({
    items: 1,
    autoplay: false,
    rewind: true,
    nav: false,
    autoHeight: true,
    onInitialized: function onInitialized(e) {
      var slidesCount = '0' + this.items().length;
      $('.header-slider__controls .total').text(slidesCount);

      if (slidesCount.length > 2) {
        slidesCount = slidesCount.slice(1);
      }
    }
  });
  $('#header-slider').on('changed.owl.carousel', function (e) {
    var sliderText = '0' + ++e.page.index;

    if (sliderText.length > 2) {
      sliderText = sliderText.slice(1);
    }

    $('.header-slider__controls .current').text(sliderText);
  });
  $('.header-slider__controls .current').click(function () {
    $('#header-slider').trigger('prev.owl.carousel');
  });
  $('.header-slider__controls .total').click(function () {
    $('#header-slider').trigger('next.owl.carousel');
  }); //bird parallax

  var bg1 = document.querySelector('.parallax-layer-1');
  var bg2 = document.querySelector('.parallax-layer-2');
  var bg3 = document.querySelector('.parallax-layer-3');
  var deer = document.querySelector('.parallax-deer');
  var eagle = document.querySelector('.parallax-eagle');
  window.addEventListener('mousemove', function (e) {
    var x = e.clientX / window.innerWidth;
    var y = e.clientY / window.innerHeight;
    bg1.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    bg2.style.transform = 'translate(-' + x * 120 + 'px, -' + y * 180 + 'px)';
    bg3.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
    deer.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 0 + 'px)';
    eagle.style.transform = 'translate(-' + x * 100 + 'px, -' + y * 30 + 'px)';
  }); //variants slider

  $('#variants-slider').owlCarousel({
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    // animateOut: 'fadeOut',
    mouseDrag: false,
    rewind: true,
    nav: false,
    onInitialized: function onInitialized(e) {
      var slidesCount = '0' + this.items().length;
      $('.variants-slider__controls .total').text(slidesCount);

      if (slidesCount.length > 2) {
        slidesCount = slidesCount.slice(1);
      }
    }
  });
  $('#variants-slider').on('changed.owl.carousel', function (e) {
    var sliderText = '0' + ++e.page.index;

    if (sliderText.length > 2) {
      sliderText = sliderText.slice(1);
    }

    $('.variants-slider__controls .current').text(sliderText);
  });
  $('.variants-slider__controls .arrow__prev').click(function () {
    $('#variants-slider').trigger('prev.owl.carousel');
  });
  $('.variants-slider__controls .arrow__next').click(function () {
    $('#variants-slider').trigger('next.owl.carousel');
  });
  $('.variants-slider__controls .current').click(function () {
    $('#variants-slider').trigger('prev.owl.carousel');
  });
  $('.variants-slider__controls .total').click(function () {
    $('#variants-slider').trigger('next.owl.carousel');
  }); // $('.variants-slider__controls .total').mouseenter(function() {
  //     $('.arrow__next span').toggleClass('asd')
  // })
});