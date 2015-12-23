
//=====================
// Drew custom hamburger menu

$(function(){

  // hide show mobile menu
  $("#main-header").on('click', '#ham-btn', function(){


    // run animation on hamburger btn
    $(this).toggleClass('ham-active');


    // on resize of window
    $(window).resize(function(){
      checkWidth()
    })

    function checkWidth() {
      // if the window is tablet and above display nav flex
      if ($(window).width() > 769) {
        $('#main-nav').css('display', 'flex')
      }
    }
  })


}) // end of ready