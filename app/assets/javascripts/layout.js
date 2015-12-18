// javascript cannot use undeclared variables
"use strict";


// ************************
// Alternative hide show menu

$(function(){

  // hide show mobile menu
  $("#main-header").on('click', '#mobile-menu-btn', function(){

    // slide the nav down
    $('#main-nav').slideToggle();

    // run animation on hamburger btn
    $(this).toggleClass('is-active');


    // on resize of window
    $(window).resize(function(){
      checkWidth()
    })

    function checkWidth() {
      // if the window is tablet and above display nav flex
      if ($(window).width() > 769) {
        $('#main-nav').css('display', '-webkit-flex')
      }
    }
  })

  $("#main-header").on('click', '#mobile-filter-btn', function(){
    $('.filter').slideToggle();
  })


  // Add boxshadow when scroll past header

  $(window).scroll(function(){

    var nav = $('#main-header')

    var navHeight = $(nav).outerHeight() // get height of nav
    var currrentPosition = $(window).scrollTop() // get scroll position

    if (currrentPosition > navHeight){
      $(nav).css('-webkit-box-shadow', '0 0 1em rgba(0,0,0,0.2)')
    }else {
      $(nav).css('-webkit-box-shadow', 'none')
    }

  })




}) // end of ready







