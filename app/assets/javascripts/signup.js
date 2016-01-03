$(function(){

 $('.confirm-psw').on('keyup',function(){

    var password = $('.password-psw').val()
    var confirm = $(this).val()
    var submit = $('.signup-container input[type="submit]')

    if(password === confirm){
      // enable btn
       $(submit).prop( "disabled", false );
      //Disable
      $('.psw-label').removeClass('toolTip-slide');

    }else {
      // fade in label
      $('.psw-label').addClass('toolTip-slide')
      // disable submit btn
      $( submit ).prop( "disabled", true ); //Disable
    }
  })



}) // end of ready