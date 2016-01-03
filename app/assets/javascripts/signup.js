$(function(){

 $('.confirm-psw').on('keyup',function(){
    var password = $('.password-psw').val()
    var confirm = $(this).val()
    var submit = $('.signup-container input[type="submit"]')

    if(password === confirm){
      console.log('correct')
      // enable btn
       $(submit).prop( "disabled", false );
      //Disable
      $('.psw-label').removeClass('slide');
      $( submit ).css('opacity', '1')

    }else {
      console.log('wrong')
      // fade in label
      $('.psw-label').addClass('slide')
      // disable submit btn
      $( submit ).prop( "disabled", true ); //Disable
      $( submit ).css('opacity', '0.1')
    }
  })



}) // end of ready