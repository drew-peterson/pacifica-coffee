$(function(){

  $(document).ready(function() {
      // run test on initial page load
      checkSize();

      // run test on resize of the window
      $(window).resize(checkSize);
  });

  //Check if CSS exists then hide ul
  function checkSize(){
      if ($(".main-nav").css("flex-direction") == "column" ){
          // your code here
          $('#main-nav').hide()

          if ($('#mobile-menu-btn').text()){
            // prevent duplicate appends..
          }else{
            // add menu button
            $('.nav-wrap').prepend("<button id='mobile-menu-btn' class='mobile-menu-btn'> menu </button>")
          }
          // show main-nav when not in mobile view
      }else {
        // show nav hide menu button
          $('#main-nav').show()
          $('#mobile-menu-btn').hide()
      }
  }

  $('#main-header').on('click', '#mobile-menu-btn', function(e){
    e.preventDefault();
    $('#main-nav').toggle()
  });

})