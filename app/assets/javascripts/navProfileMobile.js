"use strict";



$(function(){

  // Variables
   var hambugerBtn = $('#mobile-menu-btn')
   var navbar = $('#main-nav')
   var profileModal = $("#navProfileModal")

  console.log("ready!")
  console.log(profileModal)

  // functions
  var closeModal = function(){
    // hide modal
    $(profileModal).removeClass('slide-left');
    $(profileModal).fadeOut()

    // fade in hidden navigations
    $('.nav-container').fadeIn();
  }


  $(document).on('click', '#profileNavBtn', function(e){

    // get last order
    $.ajax({
      datatype: 'json',
      url: '/users/last_order'
    }).done(function(data){
      console.log("hello from done")
      console.log(data)
    })

    // hide nav menu and reset dropdown
    $(navbar).fadeOut();
    $('.nav-container').fadeOut();

    // reset hamburger button
    $(hambugerBtn).removeClass('is-active');

    // Show Modal
    $("#navProfileModal").fadeIn()
    $("#navProfileModal").addClass('slide-left');

    //bind click event to close
    $(document).one('click', '#close-btn', function(){

      closeModal();

      // show the navbar when tablet and above;
      if ($(window).width() > 769) {
        $(navbar).fadeIn();
      }
    })
  })
    // Order history click
  $('#navProfileModal').on('click', '.history-col', function(e){
    // redirect to order history
    $.get('/users/order_history')
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