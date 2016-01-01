// array will contain which classes are shown

$(function(){
  var filteredClass = []
  // click a checkbox
  $('.filter-container').on('change', 'input[type="checkbox"]', function(e){
    e.preventDefault();
  //   grab the value of the checkbox, show this class
    var type = $(this).attr('value');
  //   grab all items
    var all  = $('.item-card')
    // check array
    checkClasses(type)
    // hide everything
    all.hide();
  //   if the array is empty, nothing filtered show everything
    if (filteredClass.length <= 0) {
      all.show();
    }else{
      // call functino to display items
      displayItems();
    }
    console.log(filteredClass)
  })

  var checkClasses = function(type){
    console.log('check classes')
    //   check array for item class
    var index = filteredClass.indexOf(type);
    // if the item is not in array
    if (index === -1 ) {
      filteredClass.push(type);     // add to array
    }else{
      // 2nd click to uncheck would remove item
      filteredClass.splice(index, 1);
    }
  }

  var displayItems = function(){
    console.log('disply items')
    for(i = 0; i < filteredClass.length; i++){
      $('.' + filteredClass[i]).show();
    }
  }


}) // end of ready