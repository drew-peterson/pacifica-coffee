
$(function(){

  $('#order-history').on('click', '#buyAgain', function(e){
    e.preventDefault();

    var forms = $(this).parent().find('form')

    var addToCart = function(i){
      data = $(forms[i]).serialize()

    $.ajax({
      type: 'POST',
      url: 'users/cart',
      data: data
    }).done(function(data){
      console.log('done')
    })

    } // end of addToCart

    for( i = 0; i < forms.length; i++ ){
      addToCart(i)
    } // end of for loop




  }) // end of click

}) // end of ready