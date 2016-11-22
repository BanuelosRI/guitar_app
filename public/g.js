// JavaScript with ajax

// When doc is ready get this going...
$(document).ready(function(){

  //JQuery w/ajax method requesting the following...
  $.ajax({
    datatype: 'json',
    url: 'http://localhost:3000/guitars.json',
    method: 'GET',
    success: function(dataFromServer){
      // alert(dataFromServer);
      dataFromServer.forEach(function(guitar){
        $("#guitar_list").append('<li><a href="/guitars/' + guitar.id + '">' + guitar.brand + '</a></li>')
      }); //end of forEach

    },
    error: function(errorThrown){
      alert(errorThrown);
    }

  }); // end of $.ajax

// Don't forge to deal with the security issue!!!!

  $("#create_guitar").on("click", function(){
    // gets and saves the value from the "form" line 20 in html
    var inputName = $("#brand").val();
    // create the json object
    var guitarObject = {
      guitar:{
        brand: inputName
      }
    };
    // POSTING
    $.ajax({
      datatype: 'json',
      url: '/guitars',
      method: 'POST',
      data: guitarObject,
      // datafromserver is just a name it could be anything
      success: function(dataFromServer){
        alert("Received message: " + JSON.stringify(dataFromServer));
        $("#guitar_list").append('<li><a href="/guitars/' + dataFromServer.id + '">' + dataFromServer.brand + '</a></li>');
      },

    error: function(x, y, errorThrown){
      alert("failed" + errorThrown);
    }
  }); //end of AJAX


}); //end of on click



}); //end of jquery ready function
