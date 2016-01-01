$(function(){

  var data = {}

  $('.filter-container').on('change', 'input[type="checkbox"]', function(e){
    e.preventDefault();

    // grab the associated name and values from checkbox
    var value = $(this).attr('value'); // ex: blonde
    var name = $(this).attr('name'); // ex: roast

    // remove checked values for same name
    var cValue = data[name]
    $('input[value=' + cValue + ']').prop('checked', false);

    // add filters to hash
    data[name] = value

    console.log(data)

    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: '/items',
      data: data
    }).done(function(data){
      // do nothing
      var html = data.html

      $('.items-container').html(html);
    })

  })




}) // end of ready