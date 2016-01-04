// $(function(){

//  $('.confirm-psw').on('keyup',function(){
//     var password = $('.password-psw').val()
//     var confirm = $(this).val()
//     var submit = $('.signup-container input[type="submit"]')

//     if(password === confirm){
//       console.log('correct')
//       // enable btn
//        $(submit).prop( "disabled", false );
//       //Disable
//       $('.psw-label').removeClass('slide');
//       $( submit ).css('opacity', '1')

//     }else {
//       console.log('wrong')
//       // fade in label
//       $('.psw-label').addClass('slide')
//       // disable submit btn
//       $( submit ).prop( "disabled", true ); //Disable
//       $( submit ).css('opacity', '0.1')
//     }
//   })
// }) // end of ready


//==================
// 100% javascript version

// rails has all the script tags in the head so thats when the javascript is called and so it doesnt bind to anything.
// we can have the script tags at the bottom or include the jquery on ready function.
// run a imbedded script tag in html after the informatino has loaded <body onload = functionName()>
// the javascript onload does not allow mutltiple event handlers?

document.addEventListener('DOMContentLoaded', function() {//not so good alternative to $(function(){})

    var confirmPassword = document.getElementsByClassName('confirm-psw')[0]
    var submit = document.querySelector('.signup-container .signup-submit-btn')
    var label = document.querySelectorAll('.psw-label')

  // this is import, jquery will silently fail, however javascript will not
  // so only bind if the element is in the dom...
  if ( confirmPassword ){
    confirmPassword.addEventListener('keyup', function(e){ // best format
      var password = document.getElementsByClassName('password-psw')[0].value
      var confirm = e.target.value
      // if i  placed an event handler on parent, event bubbling parent would be e.currentTarget, this is how you do event deletgation, attach event on parent and make sure current !== target among other things...

      if( confirm === password ){
        correctPassword(submit, label);
      }else {
        wrongPassword(submit, label);
      }
    })
  }
});

  // add and remove classes easier
  // https://github.com/desandro/classie/blob/master/classie.js

  //javascript event bubiling or multiple click events...
  //http://www.kirupa.com/html5/handling_events_for_many_elements.htm


var correctPassword = function(submit, label){
  submit.disabled = false;
  submit.style.opacity = 1;

  for(i=0; i < label.length; i++){
    label[i].classList.remove('slide')
  }
}

var wrongPassword = function(submit, label){
  submit.disabled = true;
  submit.style.opacity = 0.2;

  for(i=0; i < label.length; i++){
    label[i].classList.add('slide')
  }
}

// PUBLISHABLE_KEY=pk_test_6pRNASCoBOKtIshFeQd4XMUh SECRET_KEY=sk_test_BQokikJOvBiI2HlWgH4olfQ2 rails s





