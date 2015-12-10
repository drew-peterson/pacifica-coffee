"use strict";

$(function(){


  $(document).on('click', '#profileNavBtn', function(e){

    e.preventDefault()

    // Variables

    var hambugerBtn = $('#mobile-menu-btn')
    var navbar = $('.main-nav')
    var profileModal = $('#navProfileModal')

    // scroll up navigation
    $(navbar).fadeOut();

    // reset hamburger button
    $(hambugerBtn).toggleClass('is-active');

    // hide menu
    $('.nav-container').fadeOut();

    // Show Modal
    $(profileModal).slideToggle();

    //bind click event to close
    $('#main-header').one('click', '#close-btn', function(){

      // hide modal
      $(profileModal).slideToggle();

      // fade in hidden navigations
      $(navbar).fadeIn();
      $('.nav-container').fadeIn();
    })

  })

}) // end of ready function