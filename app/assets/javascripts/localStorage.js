

$(function(){
  var pacifica = {};

// listen and store click in local storage
  $('#main-nav ').on('click', 'a', function(e){
    console.log('a click')

    var click = $(this).attr('class')

    pacifica.element = click;

    pacifica.somethingElse = "Drew Peterson"

    setStorage(pacifica)

  })

  // get storage and set tab...
  var selectedTab = getStorage().element
  $('.' + selectedTab).css('border', '1px solid black');


  function getStorage(){
    return JSON.parse(localStorage.getItem('pacifica'));
  }

  function setStorage(data){
    return localStorage.setItem( 'pacifica', JSON.stringify( data ))

  }

}) // end of ready