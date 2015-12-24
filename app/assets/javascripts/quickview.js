
$(function(){

  $('.item-card').on('click', '.quickviewBtn', function(e){
    e.preventDefault();

    // select the modal for item
    var modal = $(this).next()

    // add styles to show the modal
    modal.addClass('quickview-container-show')


    // Close button - not using same btn so I toggle will not work...
    $('.item-card').on('click', '#x-btn', function(e){
      e.preventDefault()

      var modal = $(this).closest('.quickview-container')
      modal.removeClass('quickview-container-show')
    })


  })


})