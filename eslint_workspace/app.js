$(document).ready(function(){
  $('#see_table_id').click(function(){
    alert('Displaying all messages in table');
    var name=$('#name').val();
    var message=$('#message').val();
    $.ajax({
      url:'message',
      type:'GET',
      data: {
        name:name,
        message:message
      },
      success: function(resultData){
        alert('lenth of my data ='+ resultData.length);
        var jsonObject = JSON.parse(resultData);
        alert(jsonObject.length);
        if (jsonObject) {
          alert('if');
          var len = jsonObject.length;
          var txt = '';
          if (len > 0) {
            alert('len if');
            for (var i = 0; i <len; i++) {
              if (jsonObject[i].name && jsonObject[i].message) {
                if(i==0)
                  alert(jsonObject[i].name +' this is');
                txt += '<tr><td>' + jsonObject[i].name + '</td><td>' + jsonObject[i].message + '</td></tr>';
              }
            }
            if (txt != ''){
              $('#table').append(txt).removeClass('hidden');
            }
          }
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert('errors:  ' + textStatus + ': ' + errorThrown);
      }
    });
  });
});