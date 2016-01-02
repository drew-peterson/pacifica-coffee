
$(function(){

  $('.items-container').on('click', '.quickviewBtn', function(e){
    e.preventDefault();

    // select the modal for item
    var modal = $(this).next()

    // add styles to show the modal
    modal.addClass('quickview-container-show')


    // Close button - not using same btn so I toggle will not work...
    $('.items-container').on('click', '#x-btn', function(e){
      e.preventDefault()

      var modal = $(this).closest('.quickview-container')
      modal.removeClass('quickview-container-show')
    })


  }) // end ofpen close modal

  //=========
  // Tool tip
  $('.quickform').hover(function(){
    // select the tool tip and show
    var toolTip = $(this).next('span');
    toolTip.toggleClass('pop-in')
  })

  // Hover for the plus btn




})