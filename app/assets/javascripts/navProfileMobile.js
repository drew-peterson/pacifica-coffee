"use strict";

$(function(){

  $(document).on('click', '#profileNavBtn', function(e){

    // Variables
    var hambugerBtn = $('#mobile-menu-btn')
    var navbar = $('#main-nav')
    var profileModal = $('#navProfileModal')

    // hide nav menu and reset dropdown
    $(navbar).slideToggle();
    $('.nav-container').fadeOut();

    // reset hamburger button
    $(hambugerBtn).toggleClass('is-active');

    // Show Modal

    $(profileModal).fadeIn()
    $(profileModal).addClass('slide-left');

    //bind click event to close
    $('#main-header').one('click', '#close-btn', function(){

      // hide modal
      $(profileModal).removeClass('slide-left');
      $(profileModal).fadeOut()

      // fade in hidden navigations
      $('.nav-container').fadeIn();
      $(navbar).fadeIn();

    })

  })

}) // end of ready function