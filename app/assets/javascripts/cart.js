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

})