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

  $(document).on('click', '.c-hamburger', function(e){
    $(this).toggleClass('is-active');
  })

}) // end of ready







