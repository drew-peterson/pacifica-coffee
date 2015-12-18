

$(function(){
  var pacifica = {};

  // get storage and set tab...
  var selectedTab = getStorage('pacifica').element
  // set style the css
  $('.' + selectedTab).css('color', 'black');


// listen and store click in local storage
  $('#main-nav ').on('click', 'a', function(e){

    // get class of clicked
    var click = $(this).attr('class')
    // set object to click value
    pacifica.element = click;
    // just test data to for object
    pacifica.somethingElse = "Drew Peterson"
    // set the local storage to object
    setStorage(pacifica)

  })







  // get and set localStorage

  function getStorage(data){
    // do this because it returns a string and you have to convert to javascript again i beleive.
    return JSON.parse(localStorage.getItem(data));
  }

  function setStorage(data){
    // hash has to be turned into string or else it will return '[object, object]'
    // however you can store key values without json bit
    return localStorage.setItem( 'pacifica', JSON.stringify( data ))
  }

}) // end of ready