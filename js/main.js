AOS.init({
  duration: 800,
  easing: 'slide',
  once: true,
});

jQuery(document).ready(function ($) {
  'use strict';

  var siteMenuClone = function () {
    $('.js-clone-nav').each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr('class', 'site-nav-wrap')
        .appendTo('.site-mobile-menu-body');
    });

    setTimeout(function () {
      var counter = 0;
      $('.site-mobile-menu .has-children').each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle': 'collapse',
          'data-target': '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          class: 'collapse',
          id: 'collapseItem' + counter,
        });

        counter++;
      });
    }, 1000);

    $('body').on('click', '.arrow-collapse', function (e) {
      var $this = $(this);
      if ($this.closest('li').find('.collapse').hasClass('show')) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    });

    $('body').on('click', '.js-menu-toggle', function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($('body').hasClass('offcanvas-menu')) {
        $('body').removeClass('offcanvas-menu');
        $this.removeClass('active');
      } else {
        $('body').addClass('offcanvas-menu');
        $this.addClass('active');
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $('.site-mobile-menu');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    });
  };
  siteMenuClone();

  var sitePlusMinus = function () {
    $('.js-btn-minus').on('click', function (e) {
      e.preventDefault();
      if ($(this).closest('.input-group').find('.form-control').val() != 0) {
        $(this)
          .closest('.input-group')
          .find('.form-control')
          .val(
            parseInt(
              $(this).closest('.input-group').find('.form-control').val()
            ) - 1
          );
      } else {
        $(this).closest('.input-group').find('.form-control').val(parseInt(0));
      }
    });
    $('.js-btn-plus').on('click', function (e) {
      e.preventDefault();
      $(this)
        .closest('.input-group')
        .find('.form-control')
        .val(
          parseInt(
            $(this).closest('.input-group').find('.form-control').val()
          ) + 1
        );
    });
  };
  // sitePlusMinus();

  var siteSliderRange = function () {
    $('#slider-range').slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
      },
    });
    $('#amount').val(
      '$' +
        $('#slider-range').slider('values', 0) +
        ' - $' +
        $('#slider-range').slider('values', 1)
    );
  };
  // siteSliderRange();

  var siteMagnificPopup = function () {
    $('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        verticalFit: true,
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
      },
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });
  };
  siteMagnificPopup();

  var siteCarousel = function () {
    if ($('.nonloop-block-13').length > 0) {
      $('.nonloop-block-13').owlCarousel({
        center: false,
        items: 1,
        loop: true, // true for repeated loop
        stagePadding: 5,
        margin: 0,
        autoplay: true, // true for auto-swipe play
        nav: true,
        navText: [
          '<span class="icon-arrow_back">',
          '<span class="icon-arrow_forward">',
        ],
        responsive: {
          600: {
            margin: 0,
            nav: true,
            items: 2,
          },
          1000: {
            margin: 0,
            stagePadding: 0,
            nav: true,
            items: 3,
            autoplay: false,
            loop: false,
          },
          1200: {
            margin: 10,
            stagePadding: 50,
            nav: true,
            items: 3,
            autoplay: false,
            loop: false,
          },
        },
      });
    }

    $('.slide-one-item').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      autoplay: true,
      pauseOnHover: false,
      nav: true,
      navText: [
        '<span class="icon-keyboard_arrow_left">',
        '<span class="icon-keyboard_arrow_right">',
      ],
    });
  };
  siteCarousel();

  var siteStellar = function () {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll',
    });
  };
  siteStellar();

  // var windowScroll = function() {

  //    $(window).scroll(function(){
  //      var $win = $(window);
  //      if ($win.scrollTop() > 200) {
  //        $('.js-site-header').addClass('scrolled');
  //      } else {
  //        $('.js-site-header').removeClass('scrolled');
  //      }

  //    });

  //  };
  //  windowScroll();

  var siteCountDown = function () {
    $('#date-countdown').countdown('2020/10/10', function (event) {
      var $this = $(this).html(
        event.strftime(
          '' +
            '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
            '<span class="countdown-block"><span class="label">%d</span> days </span>' +
            '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
            '<span class="countdown-block"><span class="label">%M</span> min </span>' +
            '<span class="countdown-block"><span class="label">%S</span> sec</span>'
        )
      );
    });
  };
  siteCountDown();

  var siteDatePicker = function () {
    if ($('.datepicker').length > 0) {
      $('.datepicker').datepicker();
    }
  };
  siteDatePicker();

  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $('.js-site-navbar'),
        sd = $('.js-scroll-wrap'),
        toggle = $('.site-menu-toggle');

      if (toggle.hasClass('open')) {
        $('.site-menu-toggle').trigger('click');
      }

      if (st > 150) {
        if (!navbar.hasClass('scrolled')) {
          navbar.addClass('scrolled');
        }
      }
      if (st < 150) {
        if (navbar.hasClass('scrolled')) {
          navbar.removeClass('scrolled sleep');
        }
      }
      if (st > 350) {
        if (!navbar.hasClass('awake')) {
          navbar.addClass('awake');
        }

        if (sd.length > 0) {
          sd.addClass('sleep');
        }
      }
      if (st < 350) {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
        if (sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };
  scrollWindow();

  // navigation
  var OnePageNavigation = function () {
    var navToggler = $('.site-menu-toggle');
    $('body').on(
      'click',
      "#site-navbar .site-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a",
      function (e) {
        e.preventDefault();
        var hash = this.hash;

        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          400,
          'easeInOutExpo',
          function () {
            window.location.hash = hash;
          }
        );
      }
    );

    // $("#menu li a[href^='#']").on('click', function(e){
    //   e.preventDefault();
    //   navToggler.trigger('click');
    // });

    $('body').on('activate.bs.scrollspy', function () {
      // console.log('nice');
      // alert('yay');
    });
  };
  OnePageNavigation();
});
