$(function(){

  var data = {}
  var items = $('.items-container').html(); // grab the items container

  $('.filter-container').on('change', 'input[type="checkbox"]', function(e){
    e.preventDefault();

    // grab the associated name and values from checkbox
    var value = $(this).attr('value'); // ex: blonde
    var name = $(this).attr('name'); // ex: roast

    // remove checked values for same name
    var cValue = data[name]
    $('input[value=' + cValue + ']').prop('checked', false);

    // check filter to see if unchecked
    checkFilter(name, value);



    console.log(data)

    if(data.length <= 0){
      console.log("data empty")
      // if not data in hash then show original items
      $('.items-container'.html(items));

    }else {
      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/items',
        data: data
      }).done(function(data){
        console.log(data.items.length)
        // do nothing
        var html = data.html
        // replace html with filtered
        $('.items-container').html(html);
      })
    } // end of else

  }) // end of change event


var checkFilter = function(name, value){
  if(data[name] === value){
    delete data[name]
  }else{
    // add filters to hash
    data[name] = value
  }
}



}) // end of ready