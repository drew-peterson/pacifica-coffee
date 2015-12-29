
$(function(){

  $('#order-history').on('click', '#buyAgain', function(e){
    e.preventDefault();

    // Find all the forms in this card
    var forms = $(this).parent().find('form')

    // Create a function that serializes form and submits ajax
    var addToCart = function(i){
      // have to wrap item in $() so its a jquery object so you can do $.functions on it
      data = $(forms[i]).serialize()

      // hit route with data, controller will grab info with params as normal
      $.ajax({
        type: 'POST',
        url: 'users/cart',
        data: data
      }).done(function(data){
        // do nothing
      })

    } // end of addToCart

    // Just call the addToCart method multiple times passing along the serialized form in array
    // cannot have ajax in for loop because calls backs will not know where to go
    for( i = 0; i < forms.length; i++ ){
      addToCart(i)
    } // end of for loop


  // Display that items have been added
  // no real checks at this point...
   $('#errorContainer').append("<p class='error-p alert-msg'> Added to Cart </p>")

  }) // end of click

}) // end of ready