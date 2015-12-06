// javascript cannot use undeclared variables
"use strict";
// var pacifica = {};
// pacifica.mobile = true;
// pacifica.test = "Drew Peterson"

// localStorage.setItem( 'pacifica', JSON.stringify( pacifica ))




// $(function(){

//   checkWidth()

//   $(window).resize(function(){
//     console.log("resize")
//     checkWidth()
//   })



// }) // end of ready

// function checkWidth(){
//   if ($(window).width() < 769) {

//    var data = getStorage()
//    data.mobile = true;
//    setStorage(data)

//    // Mobile View
//    if(getStorage().mobile){
//       console.log('Less than 769');



//     // Desktop
//     }else{
//       console.log('More than 960');

//     }

//   // Tablet and above View
//   }else {
//    var data = getStorage()
//    data.mobile = false;
//    setStorage(data)

//   }
// }

// function getStorage(){
//   return JSON.parse(localStorage.getItem('pacifica'));
// }

// function setStorage(data){
//   return localStorage.setItem( 'pacifica', JSON.stringify( data ))

// }


// ************************
// Alternative hide show menu

$(function(){

  // hide show mobile menu
  $(document).on('click', '#mobile-menu-btn', function(){
    $('#main-nav').slideToggle();

  })

  $(document).on('click', '#mobile-filter-btn', function(){
    $('.filter').slideToggle();

  })

  // **********************
  //Hamburger Jquery
  // **********************


  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

}) // end of ready







