"use strict";

$(function(){
  // Variables
   var hambugerBtn = $('#mobile-menu-btn')
   var navbar = $('#main-nav')
   var profileModal = $("#navProfileModal")
  // functions
  var closeModal = function(){
    // hide modal
    $(profileModal).removeClass('slide-left');
    $(profileModal).fadeOut()

    // remove opacity wrap
    profileModal.unwrap();

    // fade in hidden navigations
    $('.nav-container').fadeIn();
  }


  $('#main-header').on('click', '#profileNavBtn', function(e){
    // Append opacity div around modal
    profileModal.wrap('<div class="modal-wrap-opacity"></div>');

    // get last order
    $.ajax({
      url: '/orders/recent/last'
    }).done(function(data){
      console.log('done')
      // add last order to html
      var html = data.html

      // remove any html inside to reset
      $('.profile-history-container').html('')
      // append partial to container
      $('.profile-history-container').append(html)

    }).fail(function(){
      console.log('fail')
    })

    // hide nav menu and reset dropdown
    $(navbar).fadeOut();
    $('.nav-container').fadeOut();

    // reset hamburger button
    $(hambugerBtn).removeClass('is-active');

    // Show Modal
    $(profileModal).fadeIn()
    $(profileModal).addClass('slide-left');

    //bind click event to close
    $("#profile-modal-anchor").one('click', '#close-btn', function(){

      closeModal();

      // when nav is hidden on profile click, need to make it appear again on close when in tablet or above..
      if ($(window).width() > 769) {
        $(navbar).fadeIn();
      }
    })
  })
    // Order history click
  $('#navProfileModal').on('click', '.history-col', function(e){
    // redirect to order history
    window.location.href = '/orders'
    // close modal
    closeModal()
  })

  //profile click
  $('#navProfileModal').on('click','.profile-col',function(e){
    //redirect to profile
    $.get('#')
    // close modal
    closeModal()
  })

}) // end of ready function