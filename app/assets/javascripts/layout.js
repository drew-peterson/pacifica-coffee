var pacifica = {};
pacifica.mobile = true;
pacifica.test = "Drew Peterson"

localStorage.setItem( 'pacifica', JSON.stringify( pacifica ))




$(function(){

  checkWidth()
  $(window).resize(function(){
    checkWidth()
  })




}) // end of ready

function checkWidth(){
  if ($(window).width() < 769) {
   console.log('Less than 769');

   var data = getStorage()
   data.mobile = true;
   setStorage(data)


   if(getStorage().mobile){
    console.log(" True ")
    }else{

    }

  // Tablet and above View
  }else {
   console.log('More than 960');
   var data = getStorage()
   data.mobile = false;
   setStorage(data)

  }
}

function getStorage(){
  return JSON.parse(localStorage.getItem('pacifica'));
}

function setStorage(data){
  return localStorage.setItem( 'pacifica', JSON.stringify( data ))

}







