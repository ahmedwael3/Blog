/*global $*/

$(window).on('load', function () {

  'use strict';

  $('#loader').fadeOut(function () { $(this).remove(); });

});

$(function () {

  'use strict';

  // Start Code Body

  $('body').css('padding-top', $('#navbar').height() + 20);

  $('body').niceScroll({

    cursorcolor: $(':root').css('--mainColor'),
    zindex: '888888888'

  });

  // Start Code Controls

  $('.control-btns .toggle-mode').click(function () {

    $(this).children().toggleClass('la-sun la-moon');

    $('body').toggleClass('dark');

    if ($(this).children().hasClass('la-sun')) {

      $(':root').css({

        '--mainShadow': '0 6px 18px 0 rgb(9 32 76 / 8%)',
        '--bgWhite': '#fefefe'

      });

    } else {

      $(':root').css({

        '--mainShadow': '0 6px 18px 0 rgb(173 173 173 / 8%)',
        '--bgWhite': '#1f2024'

      });

    }

  });

  $('.control-btns .go-to-top').click(function () {

    $('html').animate({scrollTop: 0});

  });

  // Start Code Navbar

  $('#navbar .nav-item .open-sidebar').click(function () {

    $('#navbar .nav-popup .sidebar').toggleClass('active');

    $(this).children().toggleClass('la-bars la-times');

  });

  $('#navbar .nav-item ul li a').click(function () {

    $(this).addClass('active').parent().siblings().children().removeClass('active');

  });

  $('#navbar .nav-item .open-search,#navbar .nav-popup .search .close-search').click(function () {

    $('#navbar .nav-popup .search').toggleClass('active');

  });

  // Start Code News Bar

  setInterval(function () {

    if (!$('#news-bar ul li.active').is(':last-child')) {

      $('#news-bar ul li.active').removeClass('active').next().addClass('active');

    } else {

      $('#news-bar ul li').removeClass('active').first().addClass('active');

    }

  }, 6000);

  // Start Code Carousel

  $('.carousel .carousel-controls .next').click(function () {

    if ($('.carousel .carousel-inner.active').is(':last-child')) {

      $('.carousel .carousel-inner.active').removeClass('active');

      $('.carousel .carousel-inner').first().addClass('active');

    } else {

      $('.carousel .carousel-inner.active').removeClass('active').next().addClass('active');
      
    }

  });

  $('.carousel .carousel-controls .prev').click(function () {

    if ($('.carousel .carousel-inner.active').is(':first-child')) {

      $('.carousel .carousel-inner.active').removeClass('active');

      $('.carousel .carousel-inner').last().addClass('active');

    } else {

      $('.carousel .carousel-inner.active').removeClass('active').prev()

        .addClass('active');

    }

  });

  setInterval(function () {

    $('.carousel .carousel-controls .next').click();

  }, 6000);


  // Start Code Content

  $('#content .aside').css('top', $('#navbar').height() + 5);


});
