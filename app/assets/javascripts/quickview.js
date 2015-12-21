
$(function(){

  $('.item-card').on('click', '.quickviewBtn', function(e){
    e.preventDefault();
    console.log('click')
    // select the modal for item
    var modal = $(this).next()
    modal.css('background', 'blue')

  })


})