"use strict";

$(function(){

  var stripeBtn = $('.stripe-button-el')
  var stripeBtnSpan = $('.stripe-button-el span')

  stripeBtn.css('background', '#4285f4')
  stripeBtnSpan.css('background', 'none')

  stripeBtn.css('box-shadow', "none")
  stripeBtnSpan.css('box-shadow', "none")

  stripeBtnSpan.css('font-shadow', "none")

  stripeBtnSpan.css('font-size', "20px")

// transition
  stripeBtn.hover(function(){
    $(this).css('background', '#00c853')
  },function(){
    $(this).css('background', '#4285f4')
  })
  // change text
  stripeBtnSpan.text('Checkout')

  // hide / show billing address based on check box
  $('#user_billing_checkbox').change(function(){
    console.log('click')
    if ($(this).is(':checked')) {

      $('#user_billing_address').fadeOut()
    } else {
      $('#user_billing_address').fadeIn()

    }
  });

  // set the height for modal to be 100% height of page
  var pageHeight = $(document).height();
  $('.cart-address-modal').height(pageHeight);

})